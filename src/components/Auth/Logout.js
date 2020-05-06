import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCredentials } from '../../actions/auth';
import classes from './Auth.module.css';

const logout = props => {
  const { historyArray, onSetCredentials } = props;
  const logoutHandler = () => {
    axios.delete('https://track-my-activity.herokuapp.com/https://track-my-activity.herokuapp.com/logout/', { withCredentials: true })
      .then(response => {
        if (response.data.logged_out) {
          const data = {
            name: '',
            loggedIn: false,
          };
          onSetCredentials(data);
          historyArray.push('/');
        }
      });
  };
  return (
    <button type="button" onClick={logoutHandler} className={classes.LogoutBtn}>Logout</button>
  );
};

const mapDispatchToProps = dispatch => ({
  onSetCredentials: data => dispatch(setCredentials(data)),
});

logout.propTypes = {
  onSetCredentials: PropTypes.func.isRequired,
  historyArray: PropTypes.instanceOf(Object).isRequired,
};

export default connect(null, mapDispatchToProps)(logout);
