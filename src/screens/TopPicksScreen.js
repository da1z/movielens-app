import React from 'react';
import MoviesGrid from '../components/MoviesGrid';
import { topPicks } from '../api/movielens';
const TopPicksScreen = ({ params }) => {
  return (
    <MoviesGrid
      title="Top Picks"
      dataLoader={page =>
        topPicks(null, { page }).then(r => r.data.searchResults)
      }
    ></MoviesGrid>
  );
};
export default TopPicksScreen;
