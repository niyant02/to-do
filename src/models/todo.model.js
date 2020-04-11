const conn = require("../configs/database");

const Todo = function (todo) {
  this.name = todo.name;
  this.is_status = todo.is_status;
  this.created_at = todo.created_at;
  this.updated_at = todo.updated_at;
};

// Create new TODO
Todo.create = (newTodo, result) => {
  conn.query("INSERT INTO todo SET ?", newTodo, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Created Todo: ", { id: res.insertId, ...newTodo });
    result(null, { id: res.insertId, ...newTodo });
  });
};

// Find TODO
Todo.findById = (todoId, result) => {
  conn.query(`SELECT * FROM todo WHERE id= ${todoId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found todo: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

// Get All TODO
Todo.getAll = (result) => {
  conn.query("SELECT * FROM todo", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Total Todo: ", res.length);
    result(null, res);
  });
};

// Update TODO
Todo.updateById = (id, todo, result) => {
  conn.query(
    "UPDATE todo SET name = ?, is_status = ?, updated_at = ? WHERE id = ?",
    [todo.name, todo.is_status, todo.updated_at, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Todo with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Updated Todo: ", { id: id, ...todo });
      result(null, { id: id, ...todo });
    }
  );
};

// Remove TODO
Todo.remove = (id, result) => {
  conn.query("DELETE FROM todo WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Todo with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Deleted Todo with id: ", id);
    result(null, res);
  });
};

module.exports = Todo;
