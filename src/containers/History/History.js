import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPastData } from '../../actions/data';
import Record from '../../components/History/Record/Record';
import SingleDayData from '../../components/SingleDayData/SingleDayData';
import findTaskByID from '../../utility/utility';
import classes from './History.module.css';

class History extends Component {
  constructor() {
    super();
    this.state = {
      currentTask: {},
    };
  }

  componentDidMount() {
    const { alreadyRequested, onGetPastData } = this.props;
    if (!alreadyRequested) {
      onGetPastData();
    }
  }

  updateTasks = (id, tasks) => {
    const matchedTask = findTaskByID(id, tasks);
    this.setState({ currentTask: matchedTask });
  };

  isEmpty = obj => {
    const keys = Object.keys(obj);
    return keys.length === 0;
  };

  render() {
    const { mainActivities, tasks } = this.props;
    const { currentTask } = this.state;
    return (
      <div>
        <div className={classes.Title}>Records from past one week.</div>
        {mainActivities
          ? mainActivities.map(mainActivity => (
            <Record
              key={mainActivity.id}
              mainActivity={mainActivity}
              clicked={() => this.updateTasks(mainActivity.id, tasks)}
            />
          ))
          : null}
        {!this.isEmpty(currentTask) ? <SingleDayData task={currentTask} /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mainActivities: state.data.pastData.mainActivities,
  tasks: state.data.pastData.tasks,
  alreadyRequested: state.data.receivedData,
});

const mapDispatchToProps = dispatch => ({
  onGetPastData: () => dispatch(getPastData()),
});

History.propTypes = {
  onGetPastData: PropTypes.func.isRequired,
  mainActivities: PropTypes.instanceOf(Array).isRequired,
  tasks: PropTypes.instanceOf(Array).isRequired,
  alreadyRequested: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
