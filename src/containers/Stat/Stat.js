import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPastData } from '../../actions/data';
import SingleDayData from '../../components/SingleDayData/SingleDayData';
import { isEmpty, findTaskByID } from '../../utility/utility';

class Stat extends Component {
  componentDidMount() {
    const { alreadyRequested, onGetPastData } = this.props;
    if (!alreadyRequested) {
      onGetPastData();
    }
  }

  findTodayDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    today = `${yyyy}-${mm}-${dd}`;
    return today;
  }

  findActivity = () => {
    const { tasks, mainActivities } = this.props;
    let activity = {};
    const date = this.findTodayDate();
    for (let i = 0; i < mainActivities.length; i += 1) {
      if (mainActivities[i].recorded === date) {
        activity = mainActivities[i];
        break;
      }
    }
    return (findTaskByID(activity.id, tasks));
  }

  render() {
    const matchedTask = this.findActivity();
    return (
      <div>
        {!isEmpty(matchedTask) ? (
          <>
            <h3>Today&apos;s record</h3>
            <SingleDayData task={matchedTask} />
          </>
        )
          : <h3>Please add Today&apos;s record.</h3>}
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

Stat.propTypes = {
  mainActivities: PropTypes.instanceOf(Array).isRequired,
  tasks: PropTypes.instanceOf(Array).isRequired,
  alreadyRequested: PropTypes.bool.isRequired,
  onGetPastData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stat);
