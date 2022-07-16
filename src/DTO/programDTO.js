export default (body) => ({
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