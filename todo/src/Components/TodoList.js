import React from 'react';
import { connect } from 'react-redux';

import { addNewTask, toggleTask } from '../Actions';

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

  render() {
    return (
      <div>
        <div className="todo-list">
          {this.props.tasks.map((task, index) => (
            <h4 
            onClick={e => this.toggleTask(e, index)} key={index}
            >
              {task.name}
              {task.todoStatus && <i className="completed" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleChanges}
          placeholder="Add new Task"
        />
        <button onClick={this.addTask}>Add Task</button>
        {/* <button onClick={this.deleteTask}>Delete Task</button> */}
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
  { addNewTask, toggleTask }
)(TodoList);
