import React from 'react';
import PropTypes from 'prop-types';
import classes from './Record.module.css';

const record = ({ mainActivity, clicked }) => (
  <div className={classes.Record} role="presentation" onClick={clicked}>
    <h3 className={classes.Title}>{mainActivity.title}</h3>
    <p>{mainActivity.recorded}</p>
  </div>
);

record.propTypes = {
  mainActivity: PropTypes.instanceOf(Object).isRequired,
  clicked: PropTypes.func.isRequired,
};

export default record;
