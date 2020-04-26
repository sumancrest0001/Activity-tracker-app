import React from 'react';
import classes from './ActivityItem.module.css';
import sleep from '../../images/sleep.png';
import work from '../../images/work.png';
import cook from '../../images/cook.png';
import exercise from '../../images/exercise.png';
import watch from '../../images/watch.png';
import read from '../../images/read.png';
const activityItem = ({ item }) => {
  return (
    <div className={classes.Item}>
      <div>
        <img src={sleep} alt={item} className={classes.ItemImage} />
        <p>{item}</p>
      </div>
      <div>
        <p><strong>Duration</strong></p>
        <p>3:40</p>
      </div>
    </div>
  );
};

export default activityItem;
