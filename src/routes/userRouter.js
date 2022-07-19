import express from 'express';
import schemaValidator from '../middlewares/schemaValidator.js';
import validateToken from '../middlewares/validateToken.js';
import userCreateSchema from '../schemas/userCreateSchema.js' 
import userAuthSchema from '../schemas/userAuthSchema.js';
import userFindSchema from '../schemas/userFindSchema.js';

import { createUser, authenticate, findUserById } from '../controllers/userController.js';

export default () => {
  const router = express.Router();
  router.post('', schemaValidator(userCreateSchema), createUser);
  router.post('/auth', schemaValidator(userAuthSchema), authenticate);
  router.get('/:id', validateToken(), schemaValidator(userFindSchema), findUserById );

  return router;
};
