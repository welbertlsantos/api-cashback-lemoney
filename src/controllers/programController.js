import { log, getError } from '../utils/utils.js'

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

const deleteProgram = (req, res) => {
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

const listProgram = (req, res) => {
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
    deleteProgram,
    listAllProgram,
    listProgram,
    listCashBack,


}