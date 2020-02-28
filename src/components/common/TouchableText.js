import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { colors } from '../../theme';

const TouchableText = ({ onPress, children, style, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[style]}>
    <Text style={[styles.textStyle, textStyle]}>{children}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  textStyle: {
    color: colors.secondary
  }
});
export default TouchableText;
