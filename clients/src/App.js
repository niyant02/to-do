import React from "react";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6 ml-auto mr-auto mt-5">
        <h1>Todo List</h1>
        <AddTodo />
        <Footer />
        <VisibleTodoList />
      </div>
    </div>
  </div>
);

export default App;
