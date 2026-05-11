const taskService = require("../services/taskService");

module.exports = {
  getAll: async (req, res) => {
    const tasks = await taskService.getAll();
    res.json(tasks);
  },

  create: async (req, res) => {
    const { title } = req.body;
    const task = await taskService.create(title);
    res.json(task);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { done } = req.body;
    const task = await taskService.update(id, done);
    res.json(task);
  },

  remove: async (req, res) => {
    const { id } = req.params;
    await taskService.remove(id);
    res.json({ message: "Tarefa removida" });
  }
};