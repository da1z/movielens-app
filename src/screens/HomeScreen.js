import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  RefreshControl
} from 'react-native';
import { loadFront } from '../actions/movies';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme';
import MovieListItem from '../components/MovieListItem';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false
    };
  }

  componentDidMount() {
    this.props.loadFront();
  }

  onRefresh = () => {
    this.props.loadFront();
  };

  render() {
    const { isLoading, moviesData } = this.props;
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

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});
export default connect(mapStateToProps, { loadFront })(HomeScreen);
