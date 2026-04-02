import { PrismaClient } from "@/generated/prisma";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaMariaDb(process.env.DATABASE_URL!),
    log: ['query'],
  });

globalForPrisma.prisma = prisma; // always cache it
