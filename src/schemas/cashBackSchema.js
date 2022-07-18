export default {
  id: 'list-cash-back',
  type: 'object',
  properties: {
    query: {
      type: 'object',
      required: true,
      properties: {
        idProduto: {
          type: 'String',
          required: true,
        },
        idUsuario: {
          type: 'string',
          required: true,
          pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
          format: 'uuid',
          minLength: 36,
          maxLength: 36
        },
        valorPedido: {
          type: 'Number',
          required: true,
        },
      },
    },
  },
};
