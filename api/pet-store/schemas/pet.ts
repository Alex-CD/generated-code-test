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
        categoryId: {
            type: 'number',
        },
        category: categorySchema,
        status: {
            enum: ['available', 'pending', 'sold'],
            type: 'string'
        }
    },
    required: ['name', 'categoryId', 'status'],
}