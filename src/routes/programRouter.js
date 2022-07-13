import express from 'express';
import validateSchema from '../middlewares/schema-validator.js';
import createOrderSchema from '../schemas/create-order.js';
import publishVoucherPubSubSchema from '../schemas/publish-voucher-pubsub.js';
import orderGetSchema from '../schemas/orderGet.js';
import { saveOrder, getOrder } from '../controllers/order-controller.js';
import { publishVoucherPubSub } from '../controllers/voucher-controller.js'
import tokenValidator from '../middlewares/token-validator.js';
import requestId from '../middlewares/request-id.js'

export default () => {
  const router = express.Router();
  router.post('/', requestId, tokenValidator(), validateSchema(createOrderSchema), saveOrder);
  router.put('/', requestId, tokenValidator(), validateSchema(publishVoucherPubSubSchema), publishVoucherPubSub);
  router.get('/:orderId', requestId, tokenValidator(), validateSchema(orderGetSchema), getOrder);
  return router;
};
