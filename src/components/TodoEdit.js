import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchTodo, editTodo } from "../actions";

class TodoEdit extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editTodo(formValues);
    // console.log(formValues)
  };

  render() {
    if (!this.props.todo) {
      return null;
    }
    return (
      <div>
        <h4>Todo Edit</h4>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>
            <label htmlFor="title">Title</label>
            <div>
              <Field
                name="title"
                type="text"
                component="input"
                value={this.props.todo.title}
              />
            </div>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <div>
              <Field
                name="description"
                type="text"
                component="input"
                value={this.props.todo.description}
              />
            </div>
          </div>
          <div>
            <label htmlFor="completed">Completed</label>
            <div>
              <Field
                name="completed"
                type="text"
                component="input"
                value={this.props.todo.completed}
              />
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

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todos.find(todo => todo._id === ownProps.match.params.id),
    initialValues: state.todos.find(
      todo => todo._id === ownProps.match.params.id
    )
  };
};

export default connect(
  mapStateToProps,
  { fetchTodo, editTodo }
)(
  reduxForm({
    form: "editTodoForm",
    enableReinitialize: true
  })(TodoEdit)
);
