import {
    createTransaction,
    updateTransactionStatus,
} from '../models/transaction.js';

export const processTransaction = async (transaction) => {
    return new Promise((resolve, reject) => {
        console.log('Transaction processing started for:', transaction);

        setTimeout(async () => {
            console.log('Transaction processed for:', transaction);
            await updateTransactionStatus(transaction.id, 'completed');
            resolve(transaction);
        }, 30000);
    });
};

export const sendTransaction = async (req, reply) => {
    const transaction = await createTransaction(req.body);
    processTransaction(transaction)
        .then((processedTransaction) => {
            reply.send(processedTransaction);
        })
        .catch((error) => {
            reply.status(500).send('Transaction processing failed');
        });
};

export const withdrawTransaction = async (req, reply) => {
    const transaction = await createTransaction(req.body);
    processTransaction(transaction)
        .then((processedTransaction) => {
            reply.send(processedTransaction);
        })
        .catch((error) => {
            reply.status(500).send('Transaction processing failed');
        });
};
