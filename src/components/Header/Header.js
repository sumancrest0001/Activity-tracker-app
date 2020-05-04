import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Logout from '../Auth/Logout';
import classes from './Header.module.css';
import logo from '../../images/logo.jpg';

const header = props => {
  const { name, history } = props;
  return (
    <header className={classes.Header}>
      <div>
        <img src={logo} alt="App logo" className={classes.Logo} />
      </div>
      <div className={classes.UserName}>{name}</div>
      <Logout historyArray={history} />
    </header>
  );
};

header.propTypes = {
  name: PropTypes.string.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(header);
