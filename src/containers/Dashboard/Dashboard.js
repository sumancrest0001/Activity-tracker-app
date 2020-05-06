import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slogan from '../../components/Slogan/Slogan';
import ActivitiesForm from '../../components/ActivitiesForm/ActivitiesForm';
import classes from './Dashboard.module.css';
import { setChangedStatus } from '../../actions/data';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      records: {
        title: '',
        recorded: '',
        sleep: 0,
        work: 0,
        cook: 0,
        exercise: 0,
        read: 0,
        watch: 0,
      },
      message: '',
    };
  }

  inputChangedHandler = event => {
    const { records } = this.state;
    const updatedRecords = {
      ...records,
      [event.target.name]: event.target.value,
    };
    this.setState({ records: updatedRecords });
  };

  submitHandler = event => {
    const { onSetChangedStatus } = this.props;
    const { records } = this.state;
    event.preventDefault();
    axios.post('https://cors-anywhere.herokuapp.com/https://track-my-activity.herokuapp.com/main_activities',
      {
        data: records,
      },
      { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created') {
          onSetChangedStatus();
          this.setState({ message: 'Record is created' });
        }
      })
      .catch(() => {
        this.setState({ message: 'Please check the inputs' });
      });
  };

  render() {
    const { message, records } = this.state;
    return (
      <div>
        <Slogan />
        <div className={classes.Message}>{message}</div>
        <ActivitiesForm
          values={records}
          changed={this.inputChangedHandler}
          submitForm={this.submitHandler}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSetChangedStatus: () => dispatch(setChangedStatus()),
});

Dashboard.propTypes = {
  onSetChangedStatus: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Dashboard);
