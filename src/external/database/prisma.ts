import { PrismaClient } from "@prisma/client";

const PrismaClientService = new PrismaClient({
  log: ["error", "info", "query", "warn"],
});

export { PrismaClientService };