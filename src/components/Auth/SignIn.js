import React from 'react';
import classes from './Auth.module.css';

const login = () => {
  return (

    <form className={classes.SignUp}>
      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
      <button type="submit" className={classes.SignUpBtn}>Sign In</button>
    </form>

  );
};

export default login;
