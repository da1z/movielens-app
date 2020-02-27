import React from 'react';
import { Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const BaseRating = ({ rating, color }) => (
  <Text>
    <Ionicons name="ios-star" size={16} color={color}></Ionicons>
    {Number(rating.toFixed(2))}
  </Text>
);

export default BaseRating;
