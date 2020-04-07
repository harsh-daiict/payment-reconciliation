var dbOps = {};
var db = null;
require('./db').open(function(dbn) {db = dbn;});

dbOps.saveOrder = function(order) {
  db.collection('orders').findOne({'orderId':order.orderId}, {},(err, data) => {
    if(!data) {
      db.collection('orders').insertOne(order);
    } else {
      //TODO Update Order Status, Order Return Id, Order Delivery Date
    }
  });
};

dbOps.savePayment = function(payment, oid, company) {
  var filter = {$and: [{'orderId': oid}, {'company': company}, {'payment.transactionId': {$ne:payment.transactionId}}]};
  db.collection('orders').findOneAndUpdate(filter, {$push : {payment: payment}},(err, cursor) => {
    if(!cursor || !cursor.value) console.log("Order Not Updated Found: \n" + oid)
    //TODO Save Order Payment in another if Order Not Found
  });
};

dbOps.getOrder = function(filter) {
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
