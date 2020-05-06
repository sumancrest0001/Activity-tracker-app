import React from 'react';
import PropTypes from 'prop-types';
import classes from './ActivityItem.module.css';
import sleep from '../../images/sleep.png';
import work from '../../images/work.png';
import cook from '../../images/cook.png';
import exercise from '../../images/exercise.png';
import watch from '../../images/watch.png';
import read from '../../images/read.png';

const activityItem = ({ item, position, value }) => {
  const images = [sleep, work, cook, exercise, watch, read];
  return (
    <div className={classes.Item}>
      <div>
        <img src={images[position]} alt={item} className={classes.ItemImage} />
        <p>{value}</p>
      </div>
      <div>
        <p><strong>Duration</strong></p>
        <p>{`${item} hours`}</p>
      </div>
    </div>
  );
};

activityItem.propTypes = {
  item: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default activityItem;
