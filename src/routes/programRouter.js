import express from 'express';
import createProgramSchema from '../schemas/createProgram.js';
import updateProgramSchema from '../schemas/updateProgramSchema.js';
import listAllProgramSchema from '../schemas/listAllProgramSchema.js';

import schemaValidator from '../middlewares/schemaValidator.js';
import { 
  createProgram,
  updateProgram,
  listAllProgram
} from '../controllers/programController.js'

export default () => {
  const router = express.Router();
  router.post('/', schemaValidator(createProgramSchema), createProgram);
  router.put('/', schemaValidator(updateProgramSchema), updateProgram);
  router.get('/:idUsuario', schemaValidator(listAllProgramSchema), listAllProgram);
  router.get('/program/:idProgram', schemaValidator(listAllProgramSchema), listAllProgram);
  router.patch('/')
  return router;
};
