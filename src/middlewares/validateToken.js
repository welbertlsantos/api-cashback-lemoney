import { decodeToken } from '../utils/tokenUtil.js';
import { log, getError, generateErrorObject } from '../utils/utils.js'

export default () => (req, res, next) => {
  try {
    const token = req.body.token || req.query.token || req.headers['authorization'];
    if (!token) {
      throw generateErrorObject(`${process.env.SERVICE_NAME}/invalid-token`);
    }
    decodeToken(token);
    return next();
  } catch (error) {
    log.error('Error', error);
    const e = getError(req, error);
    return res.status(e.status).json(e);
  }
}