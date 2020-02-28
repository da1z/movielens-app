import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Image, Overlay } from 'react-native-elements';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loadDetails } from '../actions/movies';
import { composePictureUrl } from '../api/movielens';
import MovieItemDetails from './MovieItemDetails';
import MovielensRating from './common/MovielensRating';
import UserRating from './common/UserRating';

const MovieItem = ({ movieData, loadDetails }) => {
  const [isShowingDetails, setIsShowingDetails] = useState(false);
  return (
    <View style={styles.mainContainer}>
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
    marginHorizontal: 5
  },
  pictureContainer: {
    width: 110,
    aspectRatio: 2 / 3,
    justifyContent: 'center',
    borderWidth: 0.5
  },
  movieTitle: {
    alignSelf: 'center'
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 110
  }
});

export default connect(null, { loadDetails })(MovieItem);
