import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { colors } from '../theme';
import MovieItem from './MovieItem';

const MovieListItem = ({ moviesList }) => {
  return (
    <View>
      <Text style={styles.title}>{moviesList.title}</Text>
      <FlatList
        data={moviesList.searchResults}
        keyExtractor={item => item.movieId.toString()}
        renderItem={({ item }) => (
          <MovieItem style={styles.movieItem} movieData={item}></MovieItem>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 5,
    fontSize: 22,
    color: colors.primary,
    textTransform: 'capitalize'
  },
  movieItem: { flex: 0, width: 130 }
});
export default MovieListItem;
