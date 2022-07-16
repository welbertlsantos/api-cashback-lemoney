import { log } from '../utils/utils.js'
import programModel from '../model/programModel.js'

export default () => {

  const createProgram = async (program) => {
    try {
      const newProgram = await programModel.create(program);
      return newProgram;
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  };

  const updateProgram = async (program) => {
    try {
      const programUpdate = await programModel.updateOne(program);
      return programUpdate;
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  };

  const updateStatusProgram = async (id) => {
    try {
      const programDelete = await programModel.findByIdAndUpdate(id, {
        $set: {
          status : 'Inativo'
        }
      });
      return programDelete;
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  };

  const listAllProgram = async (idUsuario) => {
    try {
      const allProgram = await programModel.find({});
      return allProgram;
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  };

  const listCashBack = async (produto) => {
    try {
      const cashback = await programModel.
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