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

  return (
    <main>
      <form className={classes.Form} onSubmit={submitForm}>
        <MainForm
          toggleForm={toggleSubForm}
          updateValues={changed}
          inputValues={values}
        />
        <div className={classes.SubForm} id="subform">
          <div className={classes.Inputs}>
            <label id="sleep">Sleeping:</label>
            <input type="number" max="80" name="sleep" onChange={changed} value={values.sleep} placeholder="Hours" required />
          </div>
          <div className={classes.Inputs}>
            <label id="cook">Cooking:</label>
            <input type="number" max="80" name="cook" onChange={changed} value={values.cook} placeholder="Hours" required />
          </div>
          <div className={classes.Inputs}>
            <label id="work">Office Work:</label>
            <input type="number" max="80" name="work" onChange={changed} value={values.work} placeholder="Hours" required />
          </div>
          <div className={classes.Inputs}>
            <label htmlFor="exercise">Exercise:</label>
            <input type="number" max="80" name="exercise" onChange={changed} value={values.exercise} placeholder="Hours" required />
          </div>
          <div className={classes.Inputs}>
            <label htmlFor="read">Reading:</label>
            <input type="number" max="80" name="read" onChange={changed} value={values.read} placeholder="Hours" required />
          </div>
          <div className={classes.Inputs}>
            <label htmlFor="watch">Watching TV:</label>
            <input type="number" max="80" name="watch" onChange={changed} value={values.watch} placeholder="Hours" required />
          </div>
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
