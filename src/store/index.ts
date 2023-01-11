import { createStore } from "redux";
import { combineReducers } from "redux";
import { counterReducer } from "../reducers/counter";
import { todoListReducer } from "../reducers/todolist";
export const allReducers = combineReducers({
    counterReducer:counterReducer,
    todoListReducer:todoListReducer
});