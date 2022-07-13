import { log, getError } from '../utils/utils.js'
import programService from '../services/programService.js';

const createProgram = (req, res) => {
  try {
    
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}

const updateProgram = (req, res) => {
  try {
    
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
};

const updateStatusProgram = (req, res) => {
  try {
    
  } catch (error) {
    log.error('Error: ', error.message);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}

const listAllProgram = (req, res) => {
  try {
    
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


export default {
    createProgram,
    updateProgram,
    updateStatusProgram,
    listAllProgram,
    listCashBack,
}