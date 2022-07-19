export default {
  id: 'update-program',
  type: 'object',
  properties: {
    headers: {
      type: 'object',
      required: false,
    },
    params: {
      type: 'object',
      required: true,
      properties: {
        id: {
          type: 'string',
          required: true,
        }
      }
    },
    body: {
      type: 'object',
      required: true,
      additionalProperties: false,
      properties: {
        idUsuario: {
          type: 'string',
          required: true,
          minLength: 24,
          maxLength: 24
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
          required: true,
        }
      }
    }
  },
};
