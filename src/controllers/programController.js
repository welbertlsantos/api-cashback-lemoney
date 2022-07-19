import { log, getError, generateErrorObject } from '../utils/utils.js'
import programService from '../services/programService.js';
import programDTO from '../DTO/programDTO.js';

const createProgram = async (req, res) => {
  try {

    /* verificando se já existe um programa inserido para o produto e se ele está
        ativo ainda. Caso contrário, será lançado uma exceção. */
    
    const { idProduto, dataInicio, dataFim, idUsuario } = req.body;
    
    const programFind = await programService().listCashBackCreatedInPeriod(idProduto, idUsuario, dataInicio, dataFim);

    if (programFind.length)  {
      throw generateErrorObject(`${process.env.SERVICE_NAME}/create-program`);
    }

    const newProgram = await programService().createProgram(programDTO(req.body));
    return res.status(201).json(newProgram);
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}

const updateProgram = async (req, res) => {
  try {
    
    /* recuperando informações do programa que será alterado */

    const programUpdateFind = await programService().findById(req.params.id);

    const dataInicialFormated = programUpdateFind.dataInicio.toISOString().split('T')[0];
    const dataFinalFormated = programUpdateFind.dataFim.toISOString().split('T')[0];

    if (dataInicialFormated !== req.body.dataInicio || dataFinalFormated !== req.body.dataFim) {
      /* validação para alteração do programa */
      const { idProduto, dataInicio, dataFim, idUsuario } = req.body;
      
      const programFind = await programService().listCashBackCreatedInPeriod(idProduto, idUsuario, dataInicio, dataFim);
  
      if (programFind.length)  {
        throw generateErrorObject(`${process.env.SERVICE_NAME}/update-program`);
      }
    }
    
    const programUpdate = await programService().updateProgram(req.params.id, req.body)
    res.status(200).send({message: 'Data update successfully', data: JSON.stringify(programUpdate)});
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
};

const updateStatusProgram = async (req, res) => {
  try {
    const { id } = req.params;
    await programService().updateStatusProgram(id);
    res.status(200).send({ Message: 'program disabled successfully!'});
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}

const listAllProgram = async (req, res) => {
  try {
    const { idUsuario } = req.params;
    const listProgramByUser = await programService().listAllProgram(idUsuario);
    res.status(200).send(listProgramByUser);
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}

const listCashBack = async (req, res) => {
  try {

    const { idProduto, idUsuario, valorPedido } = req.query;

    const dataInicial = new Date().toISOString().split('T')[0];

    /* verificar cashback ativo */
    const cashBackAtivo = await programService().listCashBackCreatedInPeriod(idProduto, idUsuario, dataInicial, dataInicial);

    if (!cashBackAtivo.length) {
      throw generateErrorObject(`${process.env.SERVICE_NAME}/cash-program`);
    }

    /* calculando o valor de cashback para o produto selecionado */
    const cashBackSelecionado = cashBackAtivo[0];
    
    let valorCashBack = 0;
    if (cashBackSelecionado.tipoCashBack === 'P') {
      valorCashBack = Number((cas-hBackSelecionado.valorCashBackPercentual / 100 ) * valorPedido);

    } else {
      valorCashBack = Number((valorPedido / cashBackSelecionado.valorProduto) * cashBackSelecionado.valorCashBackMoeda );
    }
    res.status(200).send({cashBack: valorCashBack.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})});
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}

const findProgramById = async (req, res) => {
  try {
    const { id } = req.params;
    const programFind = await programService().findById(id);
    if (!programFind)
      throw generateErrorObject(`${process.env.SERVICE_NAME}/invalid-program`);
    res.status(200).send(programFind);
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}

export {
    createProgram,
    updateProgram,
    updateStatusProgram,
    listAllProgram,
    listCashBack,
    findProgramById,
}