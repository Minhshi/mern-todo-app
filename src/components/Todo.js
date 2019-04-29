import React from "react";
import { Link } from "react-router-dom";

class Todo extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.todo.title}</h4>
        <p>{this.props.todo.description}</p>
        <p>{this.props.todo.completed}</p>
        <div>
          <Link to={`/${this.props.todo._id}`}>Show</Link>
          <br/>
          <Link to={`/edit/${this.props.todo._id}`}>Edit</Link>
        </div>
      </div>
    );
  }
}

export default Todo;
