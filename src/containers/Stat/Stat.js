import React from 'react';
import classes from './Stat.module.css';
import ActivityItem from '../../components/ActivityItem/ActivityItem';

const stat = () => {
  const activities = ['sleep', 'exercise', 'work', 'cook', 'read', 'watch'];
  return (
    <div className={classes.StatSection}>
      {
        activities.map(singleItem => (<ActivityItem key={singleItem} item={singleItem} />))
      }
    </div>
  );
};

export default stat;
