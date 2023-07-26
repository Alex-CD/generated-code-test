export const categorySchema = {
    $id: 'category',
    type: 'object',
    properties: {
        id: {
            type: 'number',
        },
        name: {
            type: 'string',
        },
    },
    required: ['id', 'name'],
}