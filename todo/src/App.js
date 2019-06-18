import React from 'react';
import './App.css';
import TodoList from './Components/TodoList'

function App() {
  return (
    <div className="App">
      <header>
        Laura's ToDo List
      </header>
      <TodoList  />
    </div>
  );
}

export default App;
