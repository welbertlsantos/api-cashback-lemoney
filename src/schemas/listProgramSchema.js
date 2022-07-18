export default {
  id: 'list-all-program',
  type: 'object',
  properties: {
    params: {
      type: 'object',
      required: true,
      additionalProperties: false,
      properties: {
        id: {
          type: 'string',
          required: true,
          minLength: 24,
          maxLength: 24,
        },
      }
    }
  },
};
