import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, is_status, name }) => (
  <li
    className="list-group-item"
    onClick={onClick}
    style={{
      textDecoration: is_status ? "line-through" : "none",
    }}
  >
    {name}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  is_status: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
};

export default Todo;
