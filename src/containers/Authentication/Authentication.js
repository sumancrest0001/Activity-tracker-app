import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Authentication.module.css';
import SignUp from '../../components/Auth/SignUp';
import SignIn from '../../components/Auth/SignIn';
import { setFailedCredentials, setCredentials } from '../../actions/auth';

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: true,
      signin: false,
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
      errorMessage: '',
    };
  }

  successfulSignup = response => {
    const { onSetCredentials, history } = this.props;
    const data = {
      name: response.data.user.name,
      loggedIn: true,
    };
    onSetCredentials(data);
    history.push('/');
  };

  successfulSignin = response => {
    const { onSetCredentials, history } = this.props;
    const data = {
      name: response.data.user.name,
      loggedIn: response.data.logged_in,
    };
    onSetCredentials(data);
    history.push('/');
    console.log('response', response);
  };

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
    const { onSetFailedCredentials } = this.props;
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
        if (response.data.status === 'created') {
          this.successfulSignup(response);
        }
      })
      .catch(() => {
        this.setState({ errorMessage: 'Try again' });
        onSetFailedCredentials();
      });
    event.preventDefault();
  };

  signInHandler = event => {
    const {
      signinCredentials,
    } = this.state;
    const { onSetFailedCredentials } = this.props;
    axios.post('https://track-my-activity.herokuapp.com/sessions', {
      user: {
        email: signinCredentials.email,
        password: signinCredentials.password,
      },
    },
      { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created') {
          this.successfulSignin(response);
        }
      })
      .catch(() => {
        this.setState({ errorMessage: 'Try again' });
        onSetFailedCredentials();
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
      signup, signin, signinCredentials, signupCredentials, errorMessage,
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
        <div className={classes.ErrorMessage}>{errorMessage}</div>
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

const mapDispatchToProps = dispatch => ({
  onSetCredentials: data => dispatch(setCredentials(data)),
  onSetFailedCredentials: () => dispatch(setFailedCredentials()),
});

Authentication.propTypes = {
  onSetCredentials: PropTypes.func.isRequired,
  onSetFailedCredentials: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default connect(null, mapDispatchToProps)(Authentication);
