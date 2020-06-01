import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}
export interface FetchToDosAction {
  type: ActionTypes.fetchToDos;
  payload: ToDo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteToDo;
  payload: number;
}

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const response = await axios.get<ToDo[]>(
    `https://jsonplaceholder.typicode.com/todos`
  );

  dispatch<FetchToDosAction>({
    type: ActionTypes.fetchToDos,
    payload: response.data,
  });
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteToDo,
    payload: id,
  };
};
