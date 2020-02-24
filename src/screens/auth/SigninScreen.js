import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { authenticate } from '../../actions/auth';
import { login, getMe } from '../../api/movielens';

const SigninScreen = ({ isLoading, ...props }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      ></Input>
      <Input
        placeholder="Password"
        value={password}
        autoCapitalize="none"
        onChangeText={setPassword}
      ></Input>
      <Button
        title="Sign In"
        onPress={() => {
          props.authenticate(username, password);
        }}
        isLoading={isLoading}
      ></Button>
    </View>
  );
};

const mapStateToProps = state => {
  return { isLoading: state.auth.isAuthenticating };
};
export default connect(mapStateToProps, { authenticate })(SigninScreen);
