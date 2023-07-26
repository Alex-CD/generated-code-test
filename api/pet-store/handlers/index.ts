import { RouteHandler } from "fastify";

export const getPets: RouteHandler =  async function(req, reply) {
    const result = [
        {
            id: 1,
            name: 'Bella',
            category: {
                id: 2,
                name: 'dogs'
            }
        }
    ];
    reply.code(200).send(result);
}

export const addPet: RouteHandler =  async function(req, reply) {
    reply.code(200).send(req.body);
}