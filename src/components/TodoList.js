import React from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";
import Todo from "./Todo";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <h4>Todo List</h4>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <li key={todo._id}>
                <Todo todo={todo} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodoList);
