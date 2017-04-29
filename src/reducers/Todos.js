import { ADD_TODO, TOGGLE_COMPLETED, REMOVE_TODO } from '../actions';

export default (todos = [], action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      return todos.concat(action.payload);
    case TOGGLE_COMPLETED:
      newTodos = todos.slice();
      newTodos[action.payload] = { ...todos[action.payload], completed: !todos[action.payload].completed };
      return newTodos;
    case REMOVE_TODO:
      newTodos = todos.slice();
      newTodos.splice(action.payload, 1);
      return newTodos;
    default:
      return todos;
  }
};
