import { log, getError } from '../utils/utils.js'
import programService from '../services/programService.js';
import programDTO from '../DTO/programDTO.js';

const createProgram = async (req, res) => {
  try {

    /* verificando se já existe um programa inserido para o produto e se ele está
        ativo ainda. Caso contrário, será levantado um erro. */
    
    const { idProduto } = req.body;
    const programFind = programService().listCashBack(idProduto);

    if (programFind)  {
      /* incluindo validações para criação do novo programa de cashBack */
    }

    const newProgram = await programService().createProgram(programDTO(req.body));
    return res.status(201).json(newProgram);
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}

const updateProgram = (req, res) => {
  try {
    /* validação para alteração do programa */

    res.status(200).send('Data update successfully');
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
};

const updateStatusProgram = (req, res) => {
  try {
    const { idProgram } = req.params;
    programService().updateStatusProgram(idProgram);
    res.status(200).send('program disabled successfully!');
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}

const listAllProgram = (req, res) => {
  try {

    const { idUsuario } = req.params;
    
    
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}

const listCashBack = (req, res) => {
  try {
    
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
}