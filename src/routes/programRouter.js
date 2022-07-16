import express from 'express';
import createProgramSchema from '../schemas/createProgramSchema.js';
import updateProgramSchema from '../schemas/updateProgramSchema.js';
import listAllProgramSchema from '../schemas/listAllProgramSchema.js';
import listProgramSchema from '../schemas/listProgramSchema.js';

import schemaValidator from '../middlewares/schemaValidator.js';
import { 
  createProgram,
  updateProgram,
  listAllProgram,
  listCashBack,
  updateStatusProgram
} from '../controllers/programController.js'

export default () => {
  const router = express.Router();
  router.post('', schemaValidator(createProgramSchema), createProgram);
  router.put('/', schemaValidator(updateProgramSchema), updateProgram);
  router.get('/:idUsuario', schemaValidator(listAllProgramSchema), listAllProgram);
  router.get('/program/:idProduto', schemaValidator(listAllProgramSchema), listCashBack);
  router.patch('/program/:idProgram', schemaValidator(listProgramSchema), updateStatusProgram );
  return router;
};
