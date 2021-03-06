import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { Text } from 'react-native-elements';
import { colors } from '../theme';
import MovieItem from './MovieItem';
import ActivityIndicator from './common/ActivityIndicator';

const MoviesGrid = ({ title, dataLoader }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPages, setLoadedPages] = useState([0]);
  useEffect(() => {
    if (loadedPages.includes(page)) return;
    setLoadedPages([...loadedPages, page]);

    dataLoader(page).then(searchResult => {
      if (data.length === 0) {
        setData(searchResult);
      } else {
        setData(data.concat(searchResult));
      }
      //TODO error handling
      setIsLoading(false);
    });
  }, [page]);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
        numColumns={3}
        keyExtractor={item => item.movie.movieId.toString()}
        data={data}
        renderItem={({ item }) => <MovieItem movieData={item}></MovieItem>}
        onEndReached={() => {
          setPage(page + 1);
        }}
        onEndReachedThreshold={0.5}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.primary,
    fontSize: 22,
    alignSelf: 'center'
  },
  columnWrapperStyle: {
    marginBottom: 10
  }
});

export default MoviesGrid;
