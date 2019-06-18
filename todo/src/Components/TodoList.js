import React from 'react';
import { connect } from 'react-redux';

import { addNewTask, toggleTask, deleteCompletedTasks, deleteTask} from '../Actions';

class TodoList extends React.Component {
  state = {
    newTask: ''
  };

  handleChanges = e => {
    this.setState({ newTask: e.target.value });
  };

  addTask = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
    this.setState({ newTask: '' });
  };

  toggleTask = (e, index) => {
    e.preventDefault();
    this.props.toggleTask(index);
  };

  deleteCompletedTasks = (e, todoStatus) => {
    e.preventDefault();
    this.props.deleteCompletedTasks(todoStatus)
  }

  deleteTask = (e, task) => {
    e.preventDefault();
    this.props.deleteTask(task)
  }

  render() {
    return (
      <div>
        <div className="todo-list">
          {this.props.tasks.map((task, index) => (
            <div className={`${task.todoStatus ? 'completed' : ''}`}>
              <h4 
              onClick={e => this.toggleTask(e, index)} key={index}
              >
                {task.name}
              </h4>
              <button onClick={e => this.deleteTask(e, task)}>X</button>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleChanges}
          placeholder="Add new Task"
        />
        <button onClick={this.addTask}>Add Task</button>
        <button onClick={this.deleteCompletedTasks}>Delete Completed Tasks</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    tasks: state.todoList.tasks
  };
};

export default connect(
  mapStateToProps,
  { addNewTask, toggleTask, deleteCompletedTasks, deleteTask }
)(TodoList);
