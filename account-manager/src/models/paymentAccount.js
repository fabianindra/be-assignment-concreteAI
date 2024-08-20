import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPaymentAccount = async (userId, type) => {
  return await prisma.paymentAccount.create({
    data: {
      userId,
      type,
    },
  });
};

export const getAccountsByUserId = async (userId) => {
  return await prisma.paymentAccount.findMany({
    where: { userId },
  });
};

export const getTransactionsByAccountId = async (accountId) => {
  return await prisma.paymentHistory.findMany({
      where: { accountId },
  });
};