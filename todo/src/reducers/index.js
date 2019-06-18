import { combineReducers } from 'redux'
import { todoReducer as todoList} from './todoReducer'

export default combineReducers({
  todoList,
});
