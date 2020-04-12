import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => (
  <div style={{
    maxHeight: 400,
  }}>
    <ul className="list-group" style={{
      height: 400,
      overflow: 'auto'
    }}>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id, todo)} />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      is_status: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
