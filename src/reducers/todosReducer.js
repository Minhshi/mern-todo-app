export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "CREATE_TODO":
      return [action.payload];
    case "FETCH_TODO":
      return [action.payload];
    case "EDIT_TODO":
      return [action.payload];
    case "DELETE_TODO":
      return [action.payload];
    default:
      return state;
  }
};
