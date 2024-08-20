import {
    createPaymentAccount,
    getAccountsByUserId,
    getTransactionsByAccountId,
} from '../models/paymentAccount.js';

export const createAccount = async (req, reply) => {
    const { userId, type } = req.body;
    const account = await createPaymentAccount(userId, type);
    reply.send(account);
};

export const getUserAccounts = async (req, reply) => {
    const userId = req.user.userId;
    const accounts = await getAccountsByUserId(userId);
    reply.send(accounts);
};

export const getAccountTransactions = async (req, reply) => {
    const accountId = req.params.id;
    const transactions = await getTransactionsByAccountId(accountId);
    reply.send(transactions);
};
