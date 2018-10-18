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

//Start listening
app.listen(port, function() {
  console.log('listening on ', port);
})

//Connect to database
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
  //Eventually want to re-render page with F1
})

app.post('/account', function(req, res) {
  newTransact(req.body, (response) => {
    // res.send(response);
    res.status(204).send();
  });
});
// app.post()

//Making model instances for the database
let newTransact = function(f1, callback) {
  let name = f1.name;
  let email = f1.email;
  let password = f1.password;
  let row = new Transaction({name, email, password});
  db.collection('transactCol').insertOne(row);
  db.collection('transactCol').findOne({name: name}, function(err, result) {
    callback(result);
  });
} 

// newTransact({name: "TimmyDoe" , email:"JaneD@yahoo.com", password:"123456"}, (res)=> console.log(res));

