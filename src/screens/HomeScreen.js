import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { logout } from '../actions/auth';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> HomeScreen </Text>
        <Button title="Logout" onPress={this.props.logout}></Button>
      </View>
    );
  }
}

export default connect(null, { logout })(HomeScreen);
