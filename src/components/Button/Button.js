import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const button = ({ children }) => (
  <button type="button" className={classes.Button}>{children}</button>
);

button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default button;
