import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { deleteTodo } from "../actions"

class Todo extends React.Component {
  onClickDelete = () => {
    // console.log("Clicked")
    this.props.deleteTodo(this.props.todo._id)
  }

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
          <br/>
          <Link to={`/delete/${this.props.todo._id}`}
            onClick={this.onClickDelete}
          >Delete</Link>
        </div>
      </div>
    );
  }
}

export default connect(null, {deleteTodo})(Todo);
