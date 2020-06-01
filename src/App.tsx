import React from "react";
import { connect } from "react-redux";
import { ToDo, fetchTodos, deleteTodo } from "./actions";
import { storeState } from "./reducers/index";

interface AppProps {
  todos: ToDo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {
  fetchTodoList = () => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: ToDo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  };

  render() {
    console.log("Props are: ", this.props.todos);

    return (
      <div>
        {this.renderList()}
        <button onClick={this.fetchTodoList}>Fetch ToDos</button>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: storeState): { todos: ToDo[] } => {
  return { todos };
};

const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
export default App;
