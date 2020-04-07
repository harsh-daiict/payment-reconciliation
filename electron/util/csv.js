var CONSTANTS = require('./constants');
var dbOps = require('./db-operations');
var dateUtil = require('./date');
var csv = {};
csv.readAndSaveFlipkartOrders = function(fileContents, company) {
  ordersContent = fileContents.substr(fileContents.indexOf(CONSTANTS.LINE_SEPARATOR));
  orders = ordersContent.trim().split(CONSTANTS.LINE_SEPARATOR);
  header = fileContents.split(CONSTANTS.LINE_SEPARATOR)[0];
  company = company.toString().toUpperCase();
  orders.forEach(order => {
    data = order.split(CONSTANTS.COLUMN_SEPARATOR);
    oObject = Object.create(CONSTANTS.ORDER);
    oObject.company = company;
    oObject.orderId = data[0];
    oObject.orderDate = dateUtil.stringToDate(data[1]);
    oObject.status = data[2];
    if(data[3] !== '') oObject.returnId = data[3];
    if(data[4] !== '') oObject.deliveryDate = dateUtil.stringToDate(data[4]);
    dbOps.saveOrder(oObject);
  });
};

csv.readAndSaveFlipkartPayments = function(fileContents, company) {
  paymentsContent = fileContents.substr(fileContents.indexOf(CONSTANTS.LINE_SEPARATOR));
  payments = paymentsContent.trim().split(CONSTANTS.LINE_SEPARATOR);
  header = fileContents.split(CONSTANTS.LINE_SEPARATOR)[0];
  payments.forEach(order => {
    data = order.split(CONSTANTS.COLUMN_SEPARATOR);
    oObject = Object.create(CONSTANTS.PAYMENT);
    oObject.transactionId = data[0];
    oObject.transactionDate = dateUtil.stringToDate(data[1]);
    oObject.settledAmount = data[2];
    oObject.saleAmount = data[4];
    dbOps.savePayment(oObject, data[3], company.toString().toUpperCase());
  });
};

csv.getReport = function(filter) {

}

module.exports = csv;
