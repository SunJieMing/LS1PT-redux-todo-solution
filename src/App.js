import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List!</h1>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
