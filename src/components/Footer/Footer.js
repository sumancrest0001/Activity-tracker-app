import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css';
import dashboard from '../../images/dashboard.png';
import stat from '../../images/stat.png';
import comparison from '../../images/comparison.png';
import history from '../../images/history.png';

const footer = () => (
  <div className={classes.Footer}>
    <NavLink to="/" exact activeClassName={classes.Active}>
      <div>
        <img src={dashboard} alt="dashboard" className={classes.FooterIcon} />
        <p>Dashboard</p>
      </div>
    </NavLink>
    <NavLink to="/stat" exact activeClassName={classes.Active}>
      <div>
        <img src={stat} alt="stat" className={classes.FooterIcon} />
        <p>Stat</p>
      </div>
    </NavLink>
    <NavLink to="/comparison" exact activeClassName={classes.Active}>
      <div>
        <img src={comparison} alt="comparison" className={classes.FooterIcon} />
        <p>Comparison</p>
      </div>
    </NavLink>
    <NavLink to="/history" exact activeClassName={classes.Active}>
      <div>
        <img src={history} alt="history" className={classes.FooterIcon} />
        <p>History</p>
      </div>
    </NavLink>
  </div>
);

export default footer;
