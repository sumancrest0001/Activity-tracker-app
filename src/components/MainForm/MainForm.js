/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './MainForm.module.css';

const mainForm = ({ toggleForm, updateValues, inputValues }) => (
  <div>
    <div className={classes.MainInput}>
      <label htmlFor="recordingDate" id="recordingDate-label">Date:</label>
      <input
        type="date"
        id="recordingDate"
        name="recorded"
        values={inputValues.recorded}
        onChange={updateValues}
        placeholder="Enter today's date"
        required
      />
    </div>
    <div className={classes.MainInput}>
      <label htmlFor="recordDescription" id="recordDescription-label">Title:</label>
      <input
        type="textarea"
        name="title"
        id="recordDescription"
        values={inputValues.title}
        onChange={updateValues}
        placeholder="Enter title"
        required
      />
    </div>
    <button
      type="button"
      className={classes.ActivityDisplay}
      onClick={toggleForm}
    >
      Start Recording
    </button>
  </div>
);

mainForm.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  updateValues: PropTypes.func.isRequired,
  inputValues: PropTypes.instanceOf(Object).isRequired,
};

export default mainForm;
