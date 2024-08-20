import {
  sendTransaction,
  withdrawTransaction,
} from '../controllers/transactionController.js';

export default function (fastify, opts, done) {
  fastify.post('/send', sendTransaction);
  fastify.post('/withdraw', withdrawTransaction);
  done();
}
