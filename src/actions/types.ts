import { FetchToDosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  fetchToDos,
  deleteToDo,
}

export type Action = FetchToDosAction | DeleteTodoAction;
