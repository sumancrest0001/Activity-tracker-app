/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classes from './MainForm.module.css';

const mainForm = ({ toggleForm }) => {
  return (
    <div>
      <div className={classes.MainInput}>
        <label htmlFor="recordingDate">Date:</label>
        <input type="date" id="recordingDate" value="" placeholder="Enter today's date" />
      </div>
      <div className={classes.MainInput}>
        <label htmlFor="recordDescription">Description:</label>
        <input type="textarea" id="recordDescription" value="" placeholder="Enter description" />
      </div>
      <button type="button" className={classes.ActivityDisplay} onClick={toggleForm}>Start Recording</button>
    </div>
  );
};


export default mainForm;
