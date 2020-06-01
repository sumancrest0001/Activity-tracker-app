import React from 'react';
import PropTypes from 'prop-types';
import classes from './Auth.module.css';

const signin = ({ submitForm, changed, values }) => (

  <form onSubmit={submitForm} className={classes.SignUp}>
    <input
      type="email"
      value={values.email}
      name="email"
      placeholder="Enter Email"
      onChange={changed}
    />
    <input
      type="password"
      name="password"
      value={values.password}
      placeholder="Enter Password"
      onChange={changed}
    />
    <button
      type="submit"
      className={classes.SignUpBtn}
    >
      Sign In
    </button>
  </form>

);

signin.propTypes = {
  submitForm: PropTypes.func.isRequired,
  changed: PropTypes.func.isRequired,
  values: PropTypes.instanceOf(Object).isRequired,
};

export default signin;
