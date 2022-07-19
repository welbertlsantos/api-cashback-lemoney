import express from 'express';
import createProgramSchema from '../schemas/createProgramSchema.js';
import updateProgramSchema from '../schemas/updateProgramSchema.js';
import listAllProgramSchema from '../schemas/listAllProgramSchema.js';
import listProgramSchema from '../schemas/listProgramSchema.js';
import cashBackSchema from '../schemas/cashBackSchema.js';

import schemaValidator from '../middlewares/schemaValidator.js';
import validateToken from '../middlewares/validateToken.js';

import { 
  createProgram,
  updateProgram,
  listAllProgram,
  listCashBack,
  updateStatusProgram
} from '../controllers/programController.js'

export default () => {
  const router = express.Router();
  router.post('', validateToken(), schemaValidator(createProgramSchema), createProgram);
  router.put('/:id', validateToken(), schemaValidator(updateProgramSchema), updateProgram);
  router.patch('/:id', validateToken(), schemaValidator(listProgramSchema), updateStatusProgram );
  router.get('/:idUsuario', validateToken(), schemaValidator(listAllProgramSchema), listAllProgram);
  router.get('', validateToken(), schemaValidator(cashBackSchema), listCashBack);

  return router;
};
