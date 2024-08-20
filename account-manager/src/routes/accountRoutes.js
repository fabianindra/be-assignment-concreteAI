import {
  createAccount,
  getUserAccounts,
  getAccountTransactions,
} from '../controllers/accountController.js';

export default function (fastify, opts, done) {
  fastify.post('/accounts', createAccount);
  fastify.get('/accounts', { preHandler: fastify.authenticate }, getUserAccounts);
  fastify.get('/accounts/:id/transactions', getAccountTransactions);
  done();
}
