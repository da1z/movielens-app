import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { colors } from '../theme';

export default ({ ...props }) => (
  <Input
    style={styles.input}
    inputContainerStyle={styles.container}
    autoCapitalize="none"
    autoCorrect={false}
    {...props}
  ></Input>
);

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.primary,
    marginBottom: 15,
    borderBottomWidth: 1.5
  },
  input: {}
});
