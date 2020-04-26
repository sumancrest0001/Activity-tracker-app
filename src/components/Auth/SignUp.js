import React from 'react';
import classes from './Auth.module.css';

const signUp = () => {
  return (
    <form className={classes.SignUp}>
      <input type="text" placeholder="Enter your Name" />
      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="button" className={classes.SignUpBtn}>Sign Up</button>
    </form>
  );
};

export default signUp;

