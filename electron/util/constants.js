var CONSTANTS = {};

CONSTANTS.ORDER = {
  orderId: null,
  company: null,
  orderDate: Date,
  status: null,
  returnId: null,
  deliveryDate: Date,
  payment: []
};

CONSTANTS.PAYMENT = {
  transactionId: null,
  transactionDate: Date,
  settledAmount: null,
  saleAmount: null
};

CONSTANTS.LINE_SEPARATOR = '\n';
CONSTANTS.COLUMN_SEPARATOR = ',';

CONSTANTS.FLIPKART_ORDER_ID = 'order_id';
CONSTANTS.FLIPKART_ORDER_DATE = 'order_date';
CONSTANTS.FLIPKART_STATUS = 'order_item_status';
CONSTANTS.FLIPKART_RETURN_ID = 'return_id';
CONSTANTS.FLIPKART_DELIVERY_DATE = 'delivery_date';

module.exports = CONSTANTS;
