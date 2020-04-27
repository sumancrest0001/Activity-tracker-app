import React from 'react';
import classes from './Auth.module.css';

const signin = ({ submitForm, changed, values }) => {
  return (

    <form onSubmit={submitForm} className={classes.SignUp}>
      <input type="email" value={values.email} placeholder="Enter Email" onChange={event => changed(event, 'email')} />
      <input type="password" value={values.password} placeholder="Enter Password" onChange={event => changed(event, 'password')} />
      <button type="submit" className={classes.SignUpBtn}>Sign In</button>
    </form>

  );
};

export default signin;
