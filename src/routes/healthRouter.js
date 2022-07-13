import express from 'express';

import healthController from '../controllers/health-controller.js';

export default () => {
  const router = express.Router();
  router.get('/', healthController);
  return router;
};
