import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPastData, setFailedPastData } from '../../actions/data';
import Record from '../../components/History/Record/Record';
import findTaskByID from '../../utility/utility';


class History extends Component {
  componentDidMount() {
    const { alreadyRequested, onSetPastData, onSetFailedPastData } = this.props;
    if (!alreadyRequested) {
      axios.get('https://track-my-activity.herokuapp.com/main_activities',
        { withCredentials: true })
        .then(response => {
          if (response.data.status === 'SUCCESS') {
            const records = {
              mainActivities: response.data.data.mainactivities,
              tasks: response.data.data.tasks,
            };
            onSetPastData(records);
          } else {
            console.log('Sorry, Something went wrong');
          }
        })
        .catch(error => {
          onSetFailedPastData();
          console.log('error', error);
        });
    }
  }

  render() {
    const { mainActivities, tasks } = this.props;
    return (
      mainActivities.map(mainActivity => (
        <Record
          key={mainActivity.id}
          mainActivity={mainActivity}
          task={findTaskByID(mainActivity.id, tasks)}
        />
      ))
    );
  }
}

const mapStateToProps = state => ({
  mainActivities: state.data.pastData.mainActivities,
  tasks: state.data.pastData.tasks,
  alreadyRequested: state.data.receivedData,
});

const mapDispatchToProps = dispatch => ({
  onSetPastData: data => dispatch(setPastData(data)),
  onSetFailedPastData: () => dispatch(setFailedPastData()),
});

History.propTypes = {
  onSetPastData: PropTypes.func.isRequired,
  onSetFailedPastData: PropTypes.func.isRequired,
  mainActivities: PropTypes.instanceOf(Array).isRequired,
  tasks: PropTypes.instanceOf(Array).isRequired,
  alreadyRequested: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
