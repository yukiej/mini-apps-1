const express = require('express');
const app = express()
const port = process.env.PORT || 4000;
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

//Set up connection to database?
const MongoClient = require('mongodb').MongoClient
//do I need this?
const Server = require('mongodb').Server;



app.listen(port, function() {
  console.log('listening on ', port);
})



//Set up connection to the local server?
// const mongoClient = new MongoClient(new Server('localhost', port));

//Make connection
MongoClient.connect(`mongodb://localhost/ShopDB`,  { useNewUrlParser: true }, function(err, db) {
  if (err) {
    throw err;
  }
    let currentDB = db.db('ShopDB');

    currentDB.collection('transactCol').find().toArray(function(err, result) {
      if (err) {
        throw err
      } else {
        console.log(result);
      }
    })
    // console.log("Connection made to: ", db);
 })

