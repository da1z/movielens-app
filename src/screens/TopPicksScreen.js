import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import MoviesGrid from '../components/MoviesGrid';
import { topPicks } from '../api/movielens';
const TopPicksScreen = ({ params }) => {
  return (
    // <SafeAreaView>
    <MoviesGrid
      title="Top Picks"
      dataLoader={page => topPicks(null, { page })}
    ></MoviesGrid>
    // </SafeAreaView>
  );
};
export default TopPicksScreen;
