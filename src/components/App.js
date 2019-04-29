import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../pencil.svg";
import TodoList from "./TodoList";
import TodoNew from "./TodoNew";
import TodoShow from "./TodoShow";
import TodoEdit from "./TodoEdit";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/" target="_blank">
              <img src={logo} alt="logo" width="30" height="30" />
            </a>
            <Link to="/" className="navbar-brand">
              Todo App
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Todo List
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/new" className="nav-link">
                    Todo New
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path="/" component={TodoList} />
          <Route exact path="/new" component={TodoNew} />
          <Route exact path="/:id" component={TodoShow} />
          <Route exact path="/edit/:id" component={TodoEdit} />
        </div>
      </Router>
    );
  }
}

export default App;
