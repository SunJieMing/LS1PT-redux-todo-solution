import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
  }
  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  addNewTodo() {
    this.props.addTodo(this.state.inputValue);
  }
  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.updateInputValue} />
        <button onClick={this.addNewTodo}>Submit</button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(TodoInput);
