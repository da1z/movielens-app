import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { loadFront } from '../actions/movies';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.loadFront(this.props.cookie);
  }

  render() {
    const { isLoading } = this.props;
    console.log(isLoading);
    return (
      <>
        {isLoading ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator
              size="large"
              color={colors.primary}
            ></ActivityIndicator>
          </View>
        ) : (
          <SafeAreaView>
            <View>
              <Text> HomeScreen </Text>
            </View>
          </SafeAreaView>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.movies.isFrontLoading,
    cookie: state.auth.cookie
  };
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});
export default connect(mapStateToProps, { loadFront })(HomeScreen);
