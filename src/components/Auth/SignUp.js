import React from 'react';
import classes from './Auth.module.css';

const signUp = ({ submitForm, values, changed }) => {
  return (
    <form onSubmit={submitForm} className={classes.SignUp}>
      <input type="text" placeholder="Enter your Name" value={values.fullName} onChange={event => changed(event, 'fullName')} />
      <input type="email" placeholder="Enter Email" value={values.email} onChange={event => changed(event, 'email')} />
      <input type="password" placeholder="Password" value={values.password} onChange={event => changed(event, 'password')} />
      <input type="password" placeholder="Confirm Password" value={values.confirmPassword} onChange={event => changed(event, 'confirmPassword')} />
      <button type="button" className={classes.SignUpBtn}>Sign Up</button>
    </form>
  );
};

export default signUp;
