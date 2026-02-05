import { PrismaClient } from "../generated/prisma";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

// 1. Create a global variable to hold the connection
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
  adapter: PrismaMariaDb;
};

// 2. Create Prisma MariaDB adapter (reused in development)
const adapter =
  globalForPrisma.adapter || new PrismaMariaDb(process.env.DATABASE_URL!);

if (process.env.NODE_ENV !== "production") globalForPrisma.adapter = adapter;

// 3. Initialize Prisma Client (connection happens on first query)
export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
    adapter,
  });

// 4. Save the connection to the global variable (prevents crashes in development)
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
