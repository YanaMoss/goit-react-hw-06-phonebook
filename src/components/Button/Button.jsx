import React from 'react';
import PropTypes from 'prop-types';
import { ButtonPhonebook } from './Button.styled';

export const Button = ({ title, type }) => (
  <ButtonPhonebook type={type}>{title}</ButtonPhonebook>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
