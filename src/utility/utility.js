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

export default findTaskByID;
