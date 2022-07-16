import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schemaProgram =  new Schema({
  idProgram: ObjectId,
  idUsuario: {
    type: String,
    required: [ true, 'User identifier is required.']
  },
  idProduto: {
    type: String,
    required: [ true, 'Product identifier is required' ]
  },
  descricaoProduto: {
    type: String,
    required: [ true, 'Product description is required.']
  },
  valorProduto: {
    type: Number,
    required: [ true, 'Product value is mandatory.']
  },
  tipoCashBack: {
    type: String,
    required: [ true, 'program type is required'],
    enum: [ 'P', 'V'],
  },
  valorCashBackMoeda: {
    type: Number
  },
  valorCashBackPercentual: {
    type: Number,
  },
  status: {
    type: String,
    required: true
  },
  dataInicio: {
    type: Date,
    required: [true, 'Program Start date is required.']
  },
  dataFim: {
    type: Date,
    required: [true, 'Program end date is required.']
  },
});

export default mongoose.model('Program', schemaProgram)
