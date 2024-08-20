import Fastify from 'fastify';
import fastifyJwt from '@fastify/jwt';
import userRoutes from './routes/userRoutes.js';
import accountRoutes from './routes/accountRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const fastify = Fastify({ logger: true });

fastify.register(fastifyJwt, {
    secret: process.env.JWT_SECRET,
});

fastify.decorate('authenticate', async function (req, reply) {
    try {
        await req.jwtVerify();
    } catch (err) {
        reply.send(err);
    }
});

fastify.register(userRoutes);
fastify.register(accountRoutes);

fastify.listen({ port: 3001, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Server listening on ${address}`);
});
