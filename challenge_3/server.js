const express = require('express');
const app = express()
const port = process.env.PORT || 4000;
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Transaction = require('./schema.js');

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.listen(port, function() {
  console.log('listening on ', port);
})


const ShopDB = 'mongodb://localhost/ShopDB';
mongoose.connect(ShopDB, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log("We are connected to the db!");
})

//Routes
app.get('/checkout', function(req, res) {
  res.send("Woohoo done with step 1!");
})
// app.post()

//Making model instances for the database
let makeTransaction = function(f1) {
  let name = f1.name;
  let email = f1.email;
  let password = f1.password;
  let row = new Transaction({name, email, password});
  db.collection('transactCol').insertOne(row);
  // row.save(function(err, success){
  //   if (err) {
  //     console.log("Error saving transaction, sorry!");
  //   } else {
  //     console.log("success! ", success);
  //   }
  // })
} 

makeTransaction({name: "JimmyDoe" , email:"JimD@yahoo.com", password:"456"});

