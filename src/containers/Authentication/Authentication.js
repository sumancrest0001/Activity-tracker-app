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
      loading: false,
      signupCredentials: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      signinCredentials: {
        email: '',
        password: '',
      },
    };
  }

  signUpChangedHandler = (event, inputId) => {
    const { signupCredentials } = this.state;
    const updatedCredentials = {
      ...signupCredentials,
    };
    updatedCredentials[inputId] = event.target.value;
    this.setState({ signupCredentials: updatedCredentials });
    console.log(this.state.signupCredentials[inputId]);
  };

  signInChangedHandler = (event, inputId) => {
    const { signinCredentials } = this.state.signinCredentials;
    const updatedCredentials = {
      ...signinCredentials,
    };
    updatedCredentials[inputId] = event.target.value;
    this.setState({ signinCredentials: updatedCredentials });
    console.log(this.state.signinCredentials);
  };

  /*  loginHandler = event => {
     event.preventDefault();
     this.setState({ loading: true });
 
   };
  */
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
    const {
      signup, signin, signinCredentials, signupCredentials
    } = this.state;
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
        {signup ? <SignUp submitForm={this.signupHandler} changed={this.signUpChangedHandler} values={signupCredentials} /> : null}
        {signin ? <SignIn submitForm={this.signinHandler} changed={this.signInChangedHandler} values={signinCredentials} /> : null}
      </div>
    );
  }
}

export default Authentication;
