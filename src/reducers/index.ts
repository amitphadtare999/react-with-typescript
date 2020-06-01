import { combineReducers } from "redux";
import { todosReducers } from "./todos";
import { ToDo } from "../actions";

export interface storeState {
  todos: ToDo[];
}

export const reducers = combineReducers<storeState>({
  todos: todosReducers,
});
