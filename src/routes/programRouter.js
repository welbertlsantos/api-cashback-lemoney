import express from 'express';
import createProgramSchema from '../schemas/createProgramSchema.js';
import updateProgramSchema from '../schemas/updateProgramSchema.js';
import listAllProgramSchema from '../schemas/listAllProgramSchema.js';
import listProgramSchema from '../schemas/listProgramSchema.js';
import cashBackSchema from '../schemas/cashBackSchema.js';

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
  router.put('/:id', schemaValidator(updateProgramSchema), updateProgram);
  router.patch('/:id', schemaValidator(listProgramSchema), updateStatusProgram );
  router.get('/:idUsuario', schemaValidator(listAllProgramSchema), listAllProgram);
  router.get('', schemaValidator(cashBackSchema), listCashBack);

  return router;
};
