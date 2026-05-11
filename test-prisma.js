const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.$queryRaw`SELECT 1+1 AS result`;
    console.log("Resultado do teste:", result);
  } catch (error) {
    console.error("Erro ao testar Prisma:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();