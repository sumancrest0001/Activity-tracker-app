import React from 'react';
import PropTypes from 'prop-types';
import classes from './Record.module.css';

const record = ({ mainActivity, tasks }) => {
  return (
    <div className={classes.Record}>
      <h3 className={classes.Title}>{mainActivity.title}</h3>
      <p>{mainActivity.recorded}</p>
    </div>
  );
};

record.propTypes = {
  mainActivity: PropTypes.instanceOf(Object).isRequired,
  tasks: PropTypes.instanceOf(Object).isRequired,
};

export default record;
