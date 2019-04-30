import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createTodo } from "../actions";

class TodoNew extends React.Component {
  onSubmit = formValues => {
    this.props.createTodo(formValues);
  };

  render() {
    return (
      <div>
        <h4>Todo New</h4>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>
            <label htmlFor="title">Title</label>
            <div>
              <Field name="title" type="text" component="input" />
            </div>
          </div>
          <div>
            <label htmlFor="title">Description</label>
            <div>
              <Field name="description" type="text" component="input" />
            </div>
          </div>
          <div>
            <label htmlFor="title">Completed</label>
            <div>
              <Field name="completed" type="text" component="input" />
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "newTodoForm"
})(
  connect(
    null,
    { createTodo }
  )(TodoNew)
);
