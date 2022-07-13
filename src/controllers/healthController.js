import { getError } from '../utils/util.js';

export default async (req, res) => {
  try {
    res.status(200);
    return res.json({
      service: process.env.SERVICE_NAME,
      environment: process.env.ENVIRONMENT
    });
  } catch (error) {
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
};
