import React from 'react';
import classes from './Auth.module.css';

const signin = ({ submitForm, changed, values }) => {
  return (

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
};

export default signin;
