import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./TodoList";
import TodoNew from "./TodoNew";
import TodoEdit from "./TodoEdit";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h4>Todo App</h4>
        </div>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/new" component={TodoNew} />
        <Route exact path="/edit/:id" component={TodoEdit} />
      </Router>
    );
  }
}

export default App;
