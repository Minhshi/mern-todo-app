import React from "react";
import { connect } from "react-redux";
import { fetchTodo } from "../actions";
import Todo from "./Todo";

class TodoShow extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }
  render() {
    // console.log(this.props.todo);
    if (!this.props.todo) {
      return null;
    }
    return (
      <div>
        <h4>Todo Show</h4>
        <Todo todo={this.props.todo} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todos.find(todo => todo._id === ownProps.match.params.id)
  };
};

export default connect(
  mapStateToProps,
  { fetchTodo }
)(TodoShow);
