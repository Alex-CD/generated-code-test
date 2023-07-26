import { categorySchema } from "./category"

export const petSchema = {
    $id: 'pet',
    type: 'object',
    properties: {
        id: {
            type: 'number',
        },
        name: {
            type: 'string',
        },
        category: categorySchema
    },
    required: ['id', 'name', 'category'],
}