import { petSchema } from "./pet";

export const getPetsSchema = {
    tags: ["pet"],
    description: "Get a list of pets",
    response: {
        200: {
            description: 'list of pets',
            type: 'array',
            items: {
                ...petSchema
            }
        }
    }
}

export const addPetSchema = {
    tags: ["pet"],
    description: "add a new pet",
    body: {
        ...petSchema
    },
    response: {
        200: {
            description: 'the added pet',
            ...petSchema
        }
    }
}