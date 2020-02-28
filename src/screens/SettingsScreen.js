import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { logout } from '../actions/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text h2> SettingsScreen </Text>
          <Button title="Logout" onPress={this.props.logout}></Button>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(null, { logout })(SettingsScreen);
