import React from 'react';
import classes from './Footer.module.css';
import dashboard from '../../images/dashboard.png';
import stat from '../../images/stat.png';
import comparision from '../../images/comparision.png';
import history from '../../images/history.png';

const footer = () => (
  <div className={classes.Footer}>
    <div>
      <img src={dashboard} alt="dashboard" className={classes.FooterIcon} />
      <p>Dashboard</p>
    </div>
    <div className={classes.Active}>
      <img src={stat} alt="stat" className={classes.FooterIcon} />
      <p>Stat</p>
    </div>
    <div>
      <img src={comparision} alt="comparision" className={classes.FooterIcon} />
      <p>Comparision</p>
    </div>
    <div>
      <img src={history} alt="history" className={classes.FooterIcon} />
      <p>History</p>
    </div>
  </div>
);

export default footer;
