export default (body) => ({
  idUsuario: body.idUsuario,
  idProduto: body.idProduto,
  descricaoProduto: body.descricaoProduto,
  valorProduto: body.valorProduto ? Number(body.valorProduto) : Number(0),
  tipoCashBack: body.tipoCashBack,
  valorCashBackMoeda: body.valorCashBack ? Number(body.valorCashBack) : Number(0),
  valorCashBackPercentual: body.valorCashBackPercentual ? Number(body.valorCashBackPercentual) : Number(0),
  dataInicio: new Date(body.dataInicio),
  dataFim: new Date(body.dataFim),
  status: 'Ativo'
});