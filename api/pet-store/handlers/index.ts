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