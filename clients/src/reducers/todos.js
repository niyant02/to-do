const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, is_status: !todo.is_status } : todo
      );
    case "INDEX_TODO":
      return action.payload;
    default:
      return state;
  }
};

export default todos;
