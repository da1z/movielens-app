import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';

const MovieItem = ({ movieData }) => (
  <View style={styles.mainContainer}>
    <View style={[styles.pictureContainer]}>
      {movieData.movie.posterPath ? (
        <Image
          style={[styles.pictureContainer]}
          source={{
            uri: 'https://image.tmdb.org/t/p/w185' + movieData.movie.posterPath
          }}
        />
      ) : (
        <Text style={styles.movieTitle}>{movieData.movie.title}</Text>
      )}
    </View>
    <View></View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 5,
    borderWidth: 1
  },
  pictureContainer: { width: 120, height: 180, justifyContent: 'center' },
  movieTitle: {
    alignSelf: 'center'
  }
});
export default MovieItem;
