const mongoose = require('mongoose');

//Defining schema

const Schema = mongoose.Schema;

var transactSchema = new Schema({
  name: { type: String, required: true },
  email: String, 
  password: { type: String, required: true, unique: true },
  add_line1: String,
  add_line2: String,
  city: String,
  shipping_zipcode: Number,
  phone_num: String,
  cc_num: Number,
  expir_date: Date,
  cvv: Number,
  billing_zipcode: Number 
});

//Create model from schema
const Transaction = mongoose.model('Transaction', transactSchema);

module.exports = Transaction;