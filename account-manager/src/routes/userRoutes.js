import { register, login } from '../controllers/userController.js';

export default function (fastify, opts, done) {
    fastify.post('/register', register);
    fastify.post('/login', login);
    done();
}
