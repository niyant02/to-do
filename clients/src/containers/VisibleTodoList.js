import { connect } from "react-redux";
import { updateTodo } from "../apis/index";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.is_status);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.is_status);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id, todo) => dispatch(updateTodo(id, todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
