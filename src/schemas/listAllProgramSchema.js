export default {
  id: 'list-all-program',
  type: 'object',
  properties: {
    params: {
      type: 'object',
      required: true,
      additionalProperties: false,
      properties: {
        idUsuario: {
          type: 'string',
          required: true,
          pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
          format: 'uuid',
          minLength: 36,
          maxLength: 36
        },
      }
    }
  },
};
