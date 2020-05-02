import React, { Component } from 'react';
import axios from 'axios';
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

  signUpChangedHandler = event => {
    const { signupCredentials } = this.state;
    const updatedCredentials = {
      ...signupCredentials,
      [event.target.name]: event.target.value,
    };
    this.setState({ signupCredentials: updatedCredentials });
  };

  signInChangedHandler = event => {
    const { signinCredentials } = this.state;
    const updatedCredentials = {
      ...signinCredentials,
      [event.target.name]: event.target.value,
    };
    this.setState({ signinCredentials: updatedCredentials });
  };

  signUpHandler = event => {
    const {
      signupCredentials,
    } = this.state;
    axios.post('https://track-my-activity.herokuapp.com/registrations',
      {
        user: {
          name: signupCredentials.fullName,
          email: signupCredentials.email,
          password: signupCredentials.password,
          password_confirmation: signupCredentials.confirmPassword,
        },
      },
      { withCredentials: true })
      .then(response => {
        console.log('registration res', response);
      })
      .catch(error => {
        console.log('registration error', error.response);
      });
    event.preventDefault();
  };

  signInHandler = event => {
    const {
      signinCredentials,
    } = this.state;
    axios.post('https://track-my-activity.herokuapp.com/sessions', {
      user: {
        email: signinCredentials.email,
        password: signinCredentials.password,
      },
    },
      { withCredentials: true })
      .then(response => {
        console.log('registration res', response);
      })
      .catch(error => {
        console.log('registration error', error.response);
      });
    event.preventDefault();
  };


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
      signup, signin, signinCredentials, signupCredentials,
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
        {signup ? (
          <SignUp
            submitForm={this.signUpHandler}
            changed={this.signUpChangedHandler}
            values={signupCredentials}
          />
        ) : null}
        {signin ? (
          <SignIn
            submitForm={this.signInHandler}
            changed={this.signInChangedHandler}
            values={signinCredentials}
          />
        ) : null}
      </div>
    );
  }
}

export default Authentication;
