import React from 'react';
import classes from './Header.module.css';
import logo from '../../images/logo.jpg';

const header = () => {
  return (
    <header className={classes.Header}>
      <div>
        <img src={logo} alt="App logo" className={classes.Logo} />
      </div>
      <div className={classes.AppName}>Activity Tracker</div>
      <div className={classes.UserName}>Suman</div>
    </header>
  );
};

export default header;
