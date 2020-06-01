import React from 'react';
import PropTypes from 'prop-types';
import ActivityItem from '../ActivityItem/ActivityItem';
import classes from './SingleDayData.module.css';

const singleDayData = ({ task }) => {
  const activities = ['sleep', 'work', 'cook', 'exercise', 'read', 'watch'];
  return (
    <div className={classes.StatSection}>
      {
        activities.map((keyValue, index) => (
          <ActivityItem
            key={keyValue}
            position={index}
            value={keyValue}
            item={task[keyValue]}
          />
        ))
      }
    </div>
  );
};

singleDayData.propTypes = {
  task: PropTypes.instanceOf(Object).isRequired,
};
export default singleDayData;
