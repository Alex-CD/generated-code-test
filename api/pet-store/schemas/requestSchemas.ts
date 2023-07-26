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