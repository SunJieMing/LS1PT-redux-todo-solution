export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (todoText) => {
  return {
    type: ADD_TODO,
    payload: {
      text: todoText,
      completed: false,
    }
  };
};

export const toggleCompleted = (index) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: index,
  };
};

export const removeTodo = (index) => {
  return {
    type: REMOVE_TODO,
    payload: index,
  }
};
