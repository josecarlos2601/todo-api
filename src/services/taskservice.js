const prisma = require("../config/prisma");

module.exports = {
  getAll: () => prisma.task.findMany(),

  create: (title) =>
    prisma.task.create({
      data: { title }
    }),

  update: (id, done) =>
    prisma.task.update({
      where: { id: Number(id) },
      data: { done }
    }),

  remove: (id) =>
    prisma.task.delete({
      where: { id: Number(id) }
    }),
};