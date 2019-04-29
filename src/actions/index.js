import axios from "axios";

export function fetchTodos() {
  return dispatch => {
    axios.get("http://localhost:5000/todos").then(response => {
      dispatch({
        type: "FETCH_TODOS",
        payload: response.data
      });
      // console.log(response.data);
    });
  };
}

export function createTodo(formValues) {
  return dispatch => {
    axios.post("http://localhost:5000/todos/new", formValues).then(response => {
      dispatch({
        type: "CREATE_TODO",
        payload: response.data
      });
      // console.log(response.data);
    });
  };
}

export function fetchTodo(id) {
  return dispatch => {
    axios.get(`http://localhost:5000/todos/${id}`).then(response => {
      dispatch({
        type: "FETCH_TODO",
        payload: response.data
      });
      // console.log(response.data);
    });
  };
}
