import axios from "axios";

export function fetchTodos() {
  return dispatch => {
    axios.get("http://localhost:5000/todos").then(response => {
      dispatch({
        type: "FETCH_TODOS",
        payload: response.data
      });
    });
  };
}
