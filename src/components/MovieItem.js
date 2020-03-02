import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Image, Overlay } from 'react-native-elements';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loadDetails } from '../actions/movies';
import { composePictureUrl } from '../api/movielens';
import MovieItemDetails from './MovieItemDetails';
import MovielensRating from './common/MovielensRating';
import UserRating from './common/UserRating';

const MovieItem = ({ movieData, loadDetails, style }) => {
  const [isShowingDetails, setIsShowingDetails] = useState(false);
  return (
    <View style={[styles.mainContainer, style]}>
      <Overlay isVisible={isShowingDetails} fullScreen animationType={'fade'}>
        <SafeAreaView>
          <MovieItemDetails
            itemData={movieData}
            onClose={() => setIsShowingDetails(false)}
          ></MovieItemDetails>
        </SafeAreaView>
      </Overlay>

      <TouchableOpacity
        onPress={async () => {
          loadDetails(movieData.movie.movieId);
          setIsShowingDetails(true);
        }}
      >
        <View style={[styles.pictureContainer]}>
          {movieData.movie.posterPath ? (
            <Image
              style={[styles.pictureContainer]}
              source={{
                uri: composePictureUrl(movieData.movie.posterPath)
              }}
            />
          ) : (
            <Text style={styles.movieTitle}>{movieData.movie.title}</Text>
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.ratingContainer}>
        <MovielensRating rating={movieData.movieUserData.prediction} />
        <UserRating rating={movieData.movie.avgRating} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 5,
    flex: 1 / 3
  },
  pictureContainer: {
    aspectRatio: 2 / 3,
    justifyContent: 'center',
    borderWidth: 0.5
  },
  movieTitle: {
    alignSelf: 'center'
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default connect(null, { loadDetails })(MovieItem);
