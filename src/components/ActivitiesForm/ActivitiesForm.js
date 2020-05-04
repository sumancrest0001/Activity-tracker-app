/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import MainForm from '../MainForm/MainForm';
import classes from './ActivitiesForm.module.css';

const activitiesForm = () => {

  const toggleSubForm = () => {
    const form = document.querySelector('#subform');
    form.classList.toggle(classes.Visible);
  };

  return (
    <main>
      <form className={classes.Form}>
        <MainForm toggleForm={toggleSubForm} />
        <div className={classes.SubForm} id="subform">
          <div className={classes.Inputs}>
            <label id="sleep">Sleeping:</label>
            <input type="number" max="12" aria-labelledby="sleep" placeholder="hours" />
            <input type="number" max="59" className={classes.Minutes} aria-labelledby="sleep" placeholder="minutes" />
          </div>
          <div className={classes.Inputs}>
            <label id="cook">Cooking:</label>
            <input type="number" max="12" aria-labelledby="cooking" placeholder="hours" />
            <input type="number" max="59" className={classes.Minutes} aria-labelledby="cooking" placeholder="minutes" />
          </div>
          <div className={classes.Inputs}>
            <label id="work">Office Work:</label>
            <input type="number" max="12" aria-labelledby="work" placeholder="hours" />
            <input type="number" max="59" className={classes.Minutes} aria-labelledby="work" placeholder="minutes" />
          </div>
          <div className={classes.Inputs}>
            <label htmlFor="exercise">Exercise:</label>
            <input type="number" max="12" aria-labelledby="exercise" placeholder="hours" />
            <input type="number" max="59" className={classes.Minutes} aria-labelledby="exercise" placeholder="minutes" />
          </div>
          <div className={classes.Inputs}>
            <label htmlFor="read">Reading:</label>
            <input type="number" max="12" aria-labelledby="read" placeholder="hours" />
            <input type="number" max="59" className={classes.Minutes} aria-labelledby="read" placeholder="minutes" />
          </div>
          <div className={classes.Inputs}>
            <label htmlFor="watch">Watching TV:</label>
            <input type="number" max="12" aria-labelledby="watch" />
            <input type="number" max="59" className={classes.Minutes} aria-labelledby="watch" placeholder="minutes" />
          </div>
          <button type="submit" className={classes.SubmitButton}>Save Activities</button>
        </div>
      </form>
    </main>
  );
};

export default activitiesForm;
