const findTaskByID = (id, taskArray) => {
  let task;
  for (let i = 0; i < taskArray.length; i += 1) {
    task = taskArray[i].main_activity_id === id ? taskArray[i] : [];
    break;
  }
  return task;
};

export default findTaskByID;
