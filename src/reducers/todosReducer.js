export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    default:
      return state;
  }
};
