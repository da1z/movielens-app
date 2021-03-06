import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { colors } from '../../theme';

export default ({ style, ...props }) => (
  <Input
    style={style}
    inputStyle={styles.inputStyle}
    placeholderTextColor={colors.secondary}
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
  inputStyle: { color: colors.textColor }
});
