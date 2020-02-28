import React from 'react';
import { colors } from '../../theme';
import BaseRating from './BaseRating';

const UserRating = ({ rating }) => (
  <BaseRating rating={rating} color={colors.secondary}></BaseRating>
);

export default UserRating;
