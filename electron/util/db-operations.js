var dbOps = {};
var ORDER = require('./db').ORDER;

dbOps.saveOrder = function(order) {
  ORDER.findOne({'orderId':order.orderId}, (err, data) => {
    if(!data) {
      new ORDER(order).save();
    }
  });
  //TODO Update Order Status, Order Return Id, Order Delivery Date
};

dbOps.savePayment = function(payment, oid, company) {
  var filter = {$and: [{'orderId': oid}, {'company': company}, {'payment.transactionId': {$ne:payment.transactionId}}]};
  ORDER.findOneAndUpdate(filter, {$push : {payment: payment}},(err, cursor) => {
    if(!cursor) console.log("Order Not Updated Found: \n" + oid)
    //TODO Save Order Payment in another if Order Not Found
  });
};

dbOps.getOrder = function(args) {
  db.collection('orders').find(filter,(err, cursor) => {
    if(!cursor) {
      console.log("Unable to Find Orders")
      return
    } else {
      console.log(cursor);
    }
    //TODO Save Order Payment in another if Order Not Found
  });
};

module.exports = dbOps;
