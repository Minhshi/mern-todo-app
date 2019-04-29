export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "CREATE_TODO":
      return [action.payload]
    default:
      return state;
  }
};
