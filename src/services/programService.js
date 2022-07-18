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

  const updateProgram = async (id, program) => {
    try {
      const programUpdate = await programModel.findByIdAndUpdate(id, {
        $set: {
          valorProduto: program.valorProduto,
          tipoCashBack: program.tipoCashBack,
          valorCashBackMoeda: program.valorCashBackMoeda ? Number(program.valorCashBackMoeda) : Number(0),
          valorCashBackPercentual: program.valorCashBackPercentual ? Number(program.valorCashBackPercentual) : Number(0),
          dataInicio: new Date(program.dataInicio),
          dataFim: new Date(program.dataFim)
        }
       });
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
      const allProgram = await programModel.find({}).
        where({ status: 'Ativo'});
      return allProgram;
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  };

  const listCashBack = async (produto, usuario) => {
    try {
      const cashback = await programModel.
        find({ idProduto: produto, idUsuario: usuario}).
        where({ status: 'Ativo'});
      return cashback;
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  };
  
  const listCashBackCreatedInPeriod = async (produto, usuario, dtInicio, dtFim)=> {
    try {

      const listCashBack = await programModel.
        find({$or: [{$and: [{dataInicio: {$lte: new Date(dtInicio)}},{dataFim: {$gte: new Date(dtFim)}}]},{$and: [{dataInicio: {$gte: new Date(dtInicio)}},{dataFim: {$lte: new Date(dtFim)}}]}]}).
        where({ status: 'Ativo'}).
        where({ idProduto: produto}).
        where({ idUsuario: usuario});
      
      return listCashBack;
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  }

  const findById = async (id) => {
    try {
      const program = await programModel.findById(id);
      return program;
    } catch (error) {
      log.error('Error', error.message);
      throw error;
    }
  }

  return {
    createProgram,
    updateProgram,
    updateStatusProgram,
    listAllProgram,
    listCashBack,
    listCashBackCreatedInPeriod,
    findById,
  }
}