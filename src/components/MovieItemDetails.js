import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Image, AirbnbRating } from 'react-native-elements';
import TouchableText from './common/TouchableText';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import { composePictureUrl } from '../api/movielens';
import { rateMovie, unrateMovie } from '../actions/movies';
import MovielensRating from './common/MovielensRating';
import UserRating from './common/UserRating';

const MovieItemDetails = ({
  movie,
  movieUserData,
  isLoading,
  rateMovie,
  unrateMovie,
  onClose
}) => {
  if (isLoading) return null;
  return (
    <ScrollView>
      <TouchableOpacity onPress={onClose}>
        <Ionicons
          style={{
            alignSelf: 'flex-end',
            marginRight: 10
          }}
          name="ios-close-circle-outline"
          size={35}
          color={colors.secondary}
        ></Ionicons>
      </TouchableOpacity>
      <Image
        style={styles.poster}
        containerStyle={styles.posterContainer}
        source={{
          uri: composePictureUrl(movie.posterPath)
        }}
      ></Image>
      <Text style={styles.title}>{movie.title}</Text>
      <View style={styles.ratingsContainer}>
        <MovielensRating rating={movieUserData.prediction} />
        <Text style={styles.releaseYear}>{movie.releaseYear}</Text>
        {movie.mpaa ? <Text style={styles.mpaa}>{movie.mpaa}</Text> : null}
        <UserRating rating={movie.avgRating} />
      </View>

      <AirbnbRating
        showRating={false}
        defaultRating={Math.round(movieUserData.rating)}
        selectedColor={colors.primary}
        onFinishRating={r => {
          rateMovie(movie.movieId, r);
        }}
      />
      {movieUserData.rating ? (
        <TouchableText
          style={styles.unrate}
          textStyle={styles.unrateText}
          onPress={() => {
            unrateMovie(movie.movieId);
          }}
        >
          Unrate
        </TouchableText>
      ) : null}
      <Text>{movie.plotSummary}</Text>
      <Text style={styles.nonImportantInfo}>
        Cast:{' '}
        {(movie.actors.length > 5
          ? movie.actors.slice(0, 5)
          : movie.actors
        ).join(', ')}
      </Text>
      <Text style={styles.nonImportantInfo}>
        Directors: {movie.directors.join(', ')}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  poster: {
    width: 160,
    height: 240
  },
  posterContainer: {
    alignSelf: 'center',
    shadowColor: colors.borderColor,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
    marginTop: 10
  },
  ratingsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  releaseYear: {
    marginHorizontal: 10
  },
  mpaa: {
    marginHorizontal: 10,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderColor: colors.textColor
  },
  unrate: {
    alignSelf: 'center'
  },
  unrateText: {
    fontSize: 20
  },
  nonImportantInfo: {
    color: colors.textColor2
  }
});

const mapStateToProps = state => ({
  movie: state.movieDetails.movie,
  movieUserData: state.movieDetails.movieUserData,
  isLoading: state.movieDetails.isLoading
});
export default connect(mapStateToProps, { rateMovie, unrateMovie })(
  MovieItemDetails
);
