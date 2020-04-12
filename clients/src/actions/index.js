export const addTodo = (payload) => ({
  type: "ADD_TODO",
  payload,
});

export const indexTodo = (payload) => ({
  type: "INDEX_TODO",
  payload,
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleTodo = (payload) => ({
  type: "TOGGLE_TODO",
  payload,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
