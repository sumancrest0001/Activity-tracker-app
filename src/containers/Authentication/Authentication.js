import React, { Component } from 'react';
import classes from './Authentication.module.css';
import SignUp from '../../components/Auth/SignUp';
import SignIn from '../../components/Auth/SignIn';


class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      signup: true,
      signin: false,
    };
  }


  switchForm = value => {
    let signUp;
    let signIn;
    if (value === 'signup') {
      signUp = true; signIn = false;
    } else {
      signIn = true; signUp = false;
    }
    this.setState({ signup: signUp, signin: signIn });
  }

  render() {
    const { signup, signin } = this.state;
    return (
      <div className={classes.Authentication}>
        <div className={classes.Buttons}>
          <div
            role="presentation"
            onClick={() => this.switchForm('signup')}
            className={signup ? classes.Active : classes.Inactive}
          >
            Sign Up
          </div>
          <div
            role="presentation"
            onClick={() => this.switchForm('signin')}
            className={signin ? classes.Active : classes.Inactive}
          >
            Sign In
          </div>
        </div>
        {signup ? <SignUp /> : null}
        {signin ? <SignIn /> : null}
      </div>
    );
  }
}

export default Authentication;
