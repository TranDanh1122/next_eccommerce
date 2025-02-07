import { PrismaClient } from "@prisma/client";
const globlaPrismaClient = global as unknown as { prisma?: PrismaClient }
const prisma = globlaPrismaClient.prisma ?? new PrismaClient
export default prisma