import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, RefreshControl } from 'react-native';
import { loadFront } from '../actions/movies';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme';
import MovieListItem from '../components/MovieListItem';
import ActivityIndicator from '../components/common/ActivityIndicator';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstLoad: true
    };
  }

  componentDidMount() {
    this.props
      .loadFront()
      .then(() =>
        this.setState(prevState => ({ ...prevState, isFirstLoad: false }))
      );
  }

  onRefresh = () => {
    this.props.loadFront();
  };

  render() {
    const { isLoading, moviesData } = this.props;

    if (this.state.isFirstLoad && isLoading) return <ActivityIndicator />;

    return (
      <SafeAreaView>
        <View>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={this.onRefresh}
              />
            }
            data={moviesData}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <MovieListItem moviesList={item}></MovieListItem>
            )}
          ></FlatList>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.movies.isFrontLoading,
    moviesData: state.movies.moviesData
  };
};

export default connect(mapStateToProps, { loadFront })(HomeScreen);
