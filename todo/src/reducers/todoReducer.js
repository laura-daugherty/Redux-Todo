import { ADD_NEW_TASK, TOGGLE_TASK, DELETE_COMPLETED_TASK, DELETE_TASK } from '../Actions/index';

const initialState = {
  tasks: [
    { name: 'Go Outside', todoStatus: true },
    { name: 'Feed Cats', todoStatus: false }
  ]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      const newTask = { name: action.payload, todoStatus: false };
      return {
        ...state,
        tasks: [...state.tasks, newTask]
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          console.log(index, "index in toggleTask")
          console.log(task.todoStatus)
          if (action.payload === index) {
            return {
              ...task,
              todoStatus: !task.todoStatus
            };
          } else {
            return task;
          }
        })
      };
      case DELETE_COMPLETED_TASK:
        return {
          ...state,
          tasks: state.tasks.filter(task => 
            task.todoStatus === false
          )
        }
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter(task => 
            task !== action.payload
          )
        }
        
    default:
      return state;
  }
};
