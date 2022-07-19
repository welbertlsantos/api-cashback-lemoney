export default {
  id: 'create-user',
  type: 'object',
  properties: {
    headers: {
      type: 'object',
      required: false,
    },
    params: {
      type: 'object',
      required: true,
      additionalProperties: false,
      properties: {
        id: {
          type: 'string',
          minLength: 24,
          maxLength: 24,
          required: true,
        }
      }
    }
  },
}