import React from 'react';
import PropTypes from 'prop-types';
import classes from './Auth.module.css';

const signUp = ({ submitForm, values, changed }) => (
  <form onSubmit={submitForm} className={classes.SignUp}>
    <input
      type="text"
      placeholder="Enter your Name"
      name="fullName"
      value={values.fullName}
      onChange={changed}
    />
    <input
      type="email"
      placeholder="Enter Email"
      name="email"
      value={values.email}
      onChange={changed}
    />
    <input
      type="password"
      placeholder="Password"
      name="password"
      value={values.password}
      onChange={changed}
    />
    <input
      type="password"
      placeholder="Confirm Password"
      name="confirmPassword"
      value={values.confirmPassword}
      onChange={changed}
    />
    <button
      type="submit"
      className={classes.SignUpBtn}
    >
      Sign Up
    </button>
  </form>
);

signUp.propTypes = {
  submitForm: PropTypes.func.isRequired,
  changed: PropTypes.func.isRequired,
  values: PropTypes.instanceOf(Object).isRequired,
};

export default signUp;
