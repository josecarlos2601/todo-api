const express = require("express");
const router = express.Router();

// rotas de teste
router.get("/", (req, res) => {
  res.json({ message: "Rota de tarefas funcionando!" });
});

module.exports = router;