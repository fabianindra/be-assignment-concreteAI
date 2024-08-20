import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTransaction = async (transaction) => {
  return await prisma.transaction.create({
      data: transaction,
  });
};

export const updateTransactionStatus = async (id, status) => {
  return await prisma.transaction.update({
      where: { id },
      data: { status },
  });
};

export const getTransactions = async () => {
  return await prisma.transaction.findMany();
};
