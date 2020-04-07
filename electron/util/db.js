var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost:27017/epr');

var transaction = new Schema({
  transactionId: String,
  transactionDate: { type: Date, required: true },
  settledAmount: Number,
  saleAmount: Number,
  _id : {id:false}
});

var order = new Schema({
  orderId: { type: String, required: true },
  company: String,
  orderDate: { type: Date, required: true },
  status: String,
  returnId: String,
  deliveryDate: { type: Date, required: false },
  payment: [transaction]
});

var db = {};
db.ORDER  = mongoose.model('ORDER', order);

module.exports = db;
