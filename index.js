const express = require("express");
const app = express();

app.use(express.json());

// importação da rota
const taskRoutes = require("./src/routes/taskRoutes");
app.use("/tasks", taskRoutes);

// porta
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));