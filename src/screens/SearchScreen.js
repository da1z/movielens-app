import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { searchMovie } from '../actions/movies';
import { FlatList } from 'react-native-gesture-handler';
import MovieItem from '../components/MovieItem';
const SearchScreen = ({ isSearching, searchResult, searchMovie }) => {
  console.log(searchResult);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SafeAreaView>
      <SearchBar
        placeholder={'Start typing...'}
        value={searchTerm}
        onChangeText={text => {
          searchMovie(text);
          setSearchTerm(text);
        }}
        showLoading={isSearching}
      ></SearchBar>
      <FlatList
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
        numColumns={3}
        keyExtractor={item => item.movie.movieId.toString()}
        data={searchResult.searchResults}
        renderItem={({ item }) => <MovieItem movieData={item}></MovieItem>}
        // onEndReached={() => {
        //   setPage(page + 1);
        // }}
        onEndReachedThreshold={0.5}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    marginBottom: 10
  }
});
const mapPropsToState = state => {
  return {
    isSearching: state.search.isSearching,
    searchResult: state.search.searchResult
  };
};
export default connect(mapPropsToState, { searchMovie })(SearchScreen);
