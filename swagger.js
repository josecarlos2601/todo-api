const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./src/docs/swagger.json");

function swaggerConfig(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

module.exports = swaggerConfig;