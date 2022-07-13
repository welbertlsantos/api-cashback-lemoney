import express from 'express';

import healthController from '../controllers/healthController.js';

export default () => {
  const router = express.Router();
  router.get('/', healthController);
  return router;
};
