
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const addNewTask = newTask => {
  console.log(newTask);
  return {
    type: ADD_NEW_TASK,
    payload: newTask
  };
};

export const TOGGLE_TASK = 'TOGGLE_TASK';
export const toggleTask = (index, todoStatus) => {
  console.log(todoStatus)
  console.log(index);
  return {
    type: TOGGLE_TASK,
    payload: index
  }
}

export const DELETE_COMPLETED_TASK = 'DELETE_COMPLETED_TASK';
export const deleteCompletedTasks = (todoStatus) => {
  console.log(todoStatus)
  return {
    type: DELETE_COMPLETED_TASK,
    payload: todoStatus
  }
}

export const DELETE_TASK = 'DELETE_TASK';
export const deleteTask = (task) => {
  console.log(task)
  return {
    type: DELETE_TASK,
    payload: task
  }
}