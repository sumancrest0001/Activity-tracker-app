/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import MainForm from '../MainForm/MainForm';
import classes from './ActivitiesForm.module.css';

const activitiesForm = ({ values, submitForm, changed }) => {
  const toggleSubForm = () => {
    const form = document.querySelector('#subform');
    form.classList.toggle(classes.Visible);
  };

  const activities = ['sleep', 'cook', 'work', 'exercise', 'read', 'watch'];

  return (
    <main>
      <form className={classes.Form} onSubmit={submitForm}>
        <MainForm
          toggleForm={toggleSubForm}
          updateValues={changed}
          inputValues={values}
        />
        <div className={classes.SubForm} id="subform">
          {activities.map(activity => (
            <div key={activity} className={classes.Inputs}>
              <label htmlFor={activity} id={`${activity}-label`}>{activity}</label>
              <input type="number" max="13" name={activity} id={activity} onChange={changed} value={values[activity]} placeholder="Hours" required />
            </div>
          ))}
          <button type="submit" className={classes.SubmitButton}>Save Activities</button>
        </div>
      </form>
    </main>
  );
};

activitiesForm.propTypes = {
  changed: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  values: PropTypes.instanceOf(Object).isRequired,
};

export default activitiesForm;
