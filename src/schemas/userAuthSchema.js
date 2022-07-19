export default {
  id: 'auth-user',
  type: 'object',
  properties: {
    headers: {
      type: 'object',
      required: false,
    },
    body: {
      type: 'object',
      required: true,
      additionalProperties: true,
      properties: {
        email: {
          type: 'string',
          required: true,
          format: 'email',
        },
        password: {
          type: 'string',
          required: true
        },
      }
    }
  },
}