import React from 'react';
import classes from './Header.module.css';

const header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Logo}> LOGO</div>
      <div className={classes.AppName}>Activity Tracker</div>
      <div className={classes.UserName}>Suman</div>
    </div>
  );
};

export default header;
