import { FastifyInstance, RouteHandler } from "fastify";
import { getPetsSchema } from "./schemas/requestSchemas";
import { getPets } from "./handlers";

export const petStoreEndpoints = async function(server: FastifyInstance): Promise<void> {
   
    server.get('/pets', { schema: getPetsSchema }, getPets);
}