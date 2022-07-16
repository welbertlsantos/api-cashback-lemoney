import { log } from '../utils/utils.js'
import ProgramModel from '../model/programModel.js'

export default () => {

  const createProgram = async (program) => {
    try {
      const newProgram = await ProgramModel.create(program);
      return newProgram;
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

  const listCashBack = async (produto) => {
    try {
      const cashback = await ProgramModel.
        find({ idProduto: produto}).
        where({ status: 'Ativo'})
      return cashback;
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