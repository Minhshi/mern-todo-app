import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { reducer } from "redux-form";

export default combineReducers({
  todos: todosReducer,
  form: reducer
});
