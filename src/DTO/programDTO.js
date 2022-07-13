import { v4 as uuidv4 } from 'uuid';

export default (body) => ({
  idProgram : uuidv4(),
  idUsuario: body.idUsuario,
  idProduto: body.idProduto,
  descricaoProduto: body.descricaoProduto,
  valorProduto: body.valorProduto,
  tipoCashBack: body.tipoCashBack,
  valorCashBackMoeda: body.valorCashBack,
  valorCashBackPercentual: body.valorCashBackPercentual,
  dataInicio: body.dataInicio,
  dataFim: body.dataFim,
  status: 'Ativo'
});