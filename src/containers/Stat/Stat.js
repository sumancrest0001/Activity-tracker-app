import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPastData } from '../../actions/data';
import SingleDayData from '../../components/SingleDayData/SingleDayData';
import { isEmpty, findActivity } from '../../utility/utility';

class Stat extends Component {
  componentDidMount() {
    const { alreadyRequested, onGetPastData } = this.props;
    if (!alreadyRequested) {
      onGetPastData();
    }
  }

  render() {
    const { tasks, mainActivities } = this.props;
    const matchedTask = findActivity(tasks, mainActivities);
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
