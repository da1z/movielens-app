import React from 'react';
import {
  ActivityIndicator as ActivityIndicatorBase,
  View,
  StyleSheet
} from 'react-native';
import { colors } from '../../theme';

const ActivityIndicator = ({ params }) => (
  <View style={styles.activityIndicatorContainer}>
    <ActivityIndicatorBase
      size="large"
      animating={true}
      color={colors.primary}
    ></ActivityIndicatorBase>
  </View>
);

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default ActivityIndicator;
