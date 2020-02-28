import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { colors } from '../../theme';
export default ({ style, titleStyle, ...props }) => {
  return (
    <Button
      style={[styles.btn, style]}
      titleStyle={[styles.titleStyle, titleStyle]}
      {...props}
    ></Button>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row'
  },
  titleStyle: {
    fontSize: 22,
    color: colors.primary,
    letterSpacing: 0.5
  }
});
