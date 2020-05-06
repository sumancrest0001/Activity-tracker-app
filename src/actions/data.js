import axios from 'axios';

const setPastData = data => ({
  type: 'SET_PASTDATA',
  data,
});

const setFailedPastData = () => ({
  type: 'SET_FAILED_PASTDATA',
});

const setChangedStatus = () => ({
  type: 'SET_CHANGED_PASTDATA',
});

const getPastData = () => dispatch => {
  axios.get('https://track-my-activity.herokuapp.com/main_activities',
    { withCredentials: true })
    .then(response => {
      if (response.data.status === 'SUCCESS') {
        const records = {
          mainActivities: response.data.data.mainactivities,
          tasks: response.data.data.tasks,
        };
        dispatch(setPastData(records));
      } else {
        console.log('Sorry, Something went wrong');
      }
    })
    .catch(error => {
      dispatch(setFailedPastData());
      console.log('error', error);
    });
};

export { setPastData, setFailedPastData, setChangedStatus, getPastData };
