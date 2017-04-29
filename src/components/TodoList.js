import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCompleted, removeTodo } from '../actions';

class TodoList extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.todoList.map((todo, i) => {
            return (
              <li
                className={`${todo.completed ? 'completed' : ''}`}
                key={i}>
                <button onClick={() => this.props.removeTodo(i)}>X</button>
                <span onClick={() => this.props.toggleCompleted(i)}>
                  {todo.text}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todos,
  };
};

export default connect(mapStateToProps, { toggleCompleted, removeTodo })(TodoList);
