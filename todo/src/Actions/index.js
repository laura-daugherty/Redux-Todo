
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
