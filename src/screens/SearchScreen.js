import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Text, SearchBar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { searchMovie } from '../actions/movies';
import MoviesGrid from '../components/MoviesGrid';
const SearchScreen = ({ params, isSearching, searchResult, searchMovie }) => {
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
    </SafeAreaView>
  );
};

const mapPropsToState = state => {
  return {
    isSearching: state.search.isSearching,
    searchResult: state.search.searchResult
  };
};
export default connect(mapPropsToState, { searchMovie })(SearchScreen);
