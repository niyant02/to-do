const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const todoController = require("./controllers/todo.controller");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/todo", todoController.index); // Get All records

app.post("/todo", todoController.store); // Create new TODO

app.get("/todo/:todoId", todoController.show); // Get by Id TODO

app.put("/todo/:todoId", todoController.update); // Update by Id TODO

app.delete("/todo/:todoId", todoController.delete); // Remove by Id TODO

module.exports = app;
