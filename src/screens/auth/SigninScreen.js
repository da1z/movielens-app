import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from '../../components';
import { Text } from 'react-native-elements';
import { authenticate } from '../../actions/auth';
import { colors } from '../../theme';

const SigninScreen = ({ isLoading, ...props }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    // <SafeAreaView style={styles.screen}>
    <View style={styles.container}>
      <Text style={styles.greeting1}>Welcome back to Movielens,</Text>
      <Text style={styles.greeting2}>sign in to continue</Text>
      <View style={styles.inputForm}>
        <Input
          placeholder="User Name"
          value={username}
          onChangeText={setUsername}
        ></Input>
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        ></Input>
      </View>
      <Button
        style={styles.signinButton}
        title="Sign In"
        onPress={() => {
          props.authenticate(username, password);
        }}
        loading={isLoading}
        type="clear"
      ></Button>
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'center'
  },
  greeting1: {
    fontSize: 24
  },
  greeting2: {
    color: colors.textColor2,
    fontSize: 24,
    marginTop: 5
  },
  inputForm: { marginTop: 20 },
  signinButton: {
    marginTop: 20
  }
});
const mapStateToProps = state => {
  return { isLoading: state.auth.isAuthenticating };
};
export default connect(mapStateToProps, { authenticate })(SigninScreen);
