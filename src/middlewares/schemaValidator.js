import { Validator } from 'jsonschema';
import { getError } from '../utils/utils.js';

const v = new Validator();

export default (schema) => (req, res, next = () => { }) => {
  const headers = req['headers'] || {}
  const body = req['body'] || {}
  const params = req['params'] || {}
  const query = req['query'] || {}

  const data = {
    headers, body, params, query
  };
  const result = v.validate(data, schema);

  if (result.errors.length) {
    const fields = [];
    result.errors.forEach((e) => {
      const error = {
        name: e.property,
        userMessage: e.message
      };
      fields.push(error);
    });

    const validationError = getError(req, `${process.env.SERVICE_NAME}/validation`, fields);
    return res.status(validationError.status).json(validationError);
  }
  return next();
};
