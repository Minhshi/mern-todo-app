import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h4>Todo App</h4>
        </div>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/edit/:id" component={TodoEdit} />
        <Route exact path="/new" component={TodoNew} />
      </Router>
    );
  }
}

export default App;
