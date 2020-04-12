import { connect } from "react-redux";
import { addTodo } from "../apis/index";
import NewTodo from "../components/NewTodo";

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (todo) => {
      dispatch(addTodo(todo));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewTodo);
