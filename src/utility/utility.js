const findTaskByID = (id, taskArray) => {
  let task = {};
  for (let i = 0; i < taskArray.length; i += 1) {
    if (taskArray[i].main_activity_id === id) {
      task = taskArray[i];
      break;
    }
  }
  return task;
};


const findTodayDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  today = `${yyyy}-${mm}-${dd}`;
  return today;
};

const findActivity = (tasks, mainActivities) => {
  let activity = {};
  const date = findTodayDate();
  for (let i = 0; i < mainActivities.length; i += 1) {
    if (mainActivities[i].recorded === date) {
      activity = mainActivities[i];
      break;
    }
  }
  return (findTaskByID(activity.id, tasks));
};

const isEmpty = obj => {
  const keys = Object.keys(obj);
  return keys.length === 0;
};

export { findTaskByID, isEmpty, findActivity };
