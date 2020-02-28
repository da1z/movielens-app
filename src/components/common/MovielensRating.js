import React from 'react';
import { colors } from '../../theme';
import BaseRating from './BaseRating';

const MovielensRating = ({ rating }) => (
  <BaseRating rating={rating} color={colors.primary}></BaseRating>
);

export default MovielensRating;
