export default {
  id: 'update-program',
  type: 'object',
  properties: {
    headers: {
      type: 'object',
      required: false,
    },
    body: {
      type: 'object',
      required: true,
      additionalProperties: false,
      properties: {
        idProgram: {
          type: 'string',
          required: true,
          pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
          format: 'uuid',
          minLength: 36,
          maxLength: 36
        },
        idUsuario: {
          type: 'string',
          required: true,
          pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
          format: 'uuid',
          minLength: 36,
          maxLength: 36
        },
        idProduto: {
          type: 'string',
          required: true
        },
        descricaoProduto: {
          type: 'string',
          required: true
        },
        valorProduto: {
          type: 'number',
          required: true
        },
        valorCashBackMoeda: {
          type: 'number',
          required: true
        },
        valorCashBackPercentual: {
          type: 'number',
          required: true
        },
        tipoCashBack: {
          type: 'string',
          required: true,
          enum: [ 'P', 'V']
        },
        dataInicio: {
          type: 'string',
          format: 'date',
          required: true,
        },
        dataFim: {
          type: 'string',
          format: 'date',
        }
      }
    }
  },
};
