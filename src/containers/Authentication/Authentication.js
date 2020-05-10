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
      credentials: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
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

  signUpChangedHandler = event => {
    const { credentials } = this.state;
    const updatedCredentials = {
      ...credentials,
      [event.target.name]: event.target.value,
    };
    this.setState({ credentials: updatedCredentials });
  };

  rightUserCredentials = () => {
    const { credentials, signup } = this.state;
    if (!signup) {
      return {
        email: credentials.email,
        password: credentials.password,
      };
    }
    return credentials;
  }

  signUpHandler = event => {
    const {
      signup,
    } = this.state;
    const { onSetFailedCredentials } = this.props;
    const requestType = signup ? 'registrations' : 'sessions';
    axios.post(`https://track-my-activity.herokuapp.com/${requestType}`,
      {
        user: this.rightUserCredentials(),
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

  switchForm = value => {
    const signUp = value === 'signup';
    this.setState({ signup: signUp });
  }

  render() {
    const {
      signup, credentials, errorMessage,
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
            className={!signup ? classes.Active : classes.Inactive}
          >
            Sign In
          </div>
        </div>
        <div className={classes.ErrorMessage}>{errorMessage}</div>
        {signup ? (
          <SignUp
            submitForm={this.signUpHandler}
            changed={this.signUpChangedHandler}
            values={credentials}
          />
        )
          : (
            <SignIn
              submitForm={this.signUpHandler}
              changed={this.signUpChangedHandler}
              values={credentials}
            />
          )}
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
