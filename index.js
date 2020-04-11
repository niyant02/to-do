require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./src/swagger/swagger.yaml");
const todoController = require("./src/controllers/todo.controller");

const app = require("./src/app");

var options = {
  explorer: true,
  // controllers: todoController,
};

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options)
);

app.listen(process.env.PORT, () => {
  console.log("Server is running on Port: " + process.env.PORT);
});
