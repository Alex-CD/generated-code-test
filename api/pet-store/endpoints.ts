import { FastifyInstance } from "fastify";
import { addPetSchema, getPetsSchema } from "./schemas/requestSchemas";
import { addPet, getPets } from "./handlers";

export const petStoreEndpoints = async function(server: FastifyInstance): Promise<void> {
   
    server.get('/pets', { schema: getPetsSchema }, getPets);

    server.post('/pets', { schema: addPetSchema}, addPet )
}