import React from 'react';
import classes from './Comparison.module.css';
import Button from '../../components/Button/Button';

const comparison = () => (
  <div>
    <div className={classes.Info}>In Progress</div>
    <Button>Today</Button>
    <Button>Yesterday</Button>
    <Button>A Week Ago</Button>
    <Button>A Month Ago</Button>
  </div>
);

export default comparison;
