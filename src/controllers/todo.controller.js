const Todo = require("../models/todo.model");
const moment = require("moment");

// Get All Records
exports.index = (req, res) => {
  Todo.getAll((err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "Something is Wrong." });
    } else {
      res.status(200).send(data);
    }
  });
};

// Create new Record
exports.store = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  let created_at = moment();

  const todo = new Todo({
    name: req.body.name,
    is_status: req.body.is_status,
    created_at: created_at.format("YYYY-MM-DD HH:mm"),
  });

  Todo.create(todo, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "Something is Wrong." });
    } else {
      res.status(200).send({code: 200, data, message: "Create Todo Successfully!"});
    }
  });
};

// Get by Id Record
exports.show = (req, res) => {
  Todo.findById(req.params.todoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res
          .status(404)
          .send({ message: 'Todo not found' });
      } else {
        res.status(500).send({ message: err.message || "Something is Wrong." });
      }
    } else {
      res.send(data);
    }
  });
};

// Update by Id Record
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Todo.updateById(req.params.todoId, new Todo(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res
          .status(404)
          .send({ message: 'Todo not found' });
      } else {
        res.status(500).send({ message: err.message || "Something is Wrong." });
      }
    } else {
      res.send(data);
    }
  });
};

// Delete by Id Record
exports.delete = (req, res) => {
  Todo.remove(req.params.todoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res
          .status(404)
          .send({ message: `Todo not found` });
      } else {
        res.status(500).send({ message: err.message || "Something is Wrong." });
      }
    } else {
      res.send({
        message: `Todo was deleted successfully!`,
      });
    }
  });
};
