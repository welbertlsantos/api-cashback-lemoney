import { log } from '../utils/utils.js'

export default () => {

  const createProgram = async (program) => {
    try {
      
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }

  };

  const updateProgram = async (program) => {
    try {
      
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  };

  const updateStatusProgram = async (idProgram) => {
    try {
      
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }


  };

  const listAllProgram = async (idUsuario) => {
    try {
      
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  };

  const listCashBack = async (idProduto) => {
    try {
      
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  };

  return {
    createProgram,
    updateProgram,
    updateStatusProgram,
    listAllProgram,
    listCashBack
  }
}