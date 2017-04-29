import { combineReducers } from 'redux';
import TodosReducer from './Todos';

const rootReducer = combineReducers({
  todos: TodosReducer,
});

export default rootReducer;
