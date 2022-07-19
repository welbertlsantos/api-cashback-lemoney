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
          minLength: 24,
          maxLength: 24
        },
        valorPedido: {
          type: 'Number',
          required: true,
        },
      },
    },
  },
};
