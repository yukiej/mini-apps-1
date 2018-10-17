//Set up connection to database
var MongoClient = require('mongodb').MongoClient
var Server = require('mongodb').Server;

//Set up connection to the local server?
var mongoClient = new MongoClient(new Server('localhost', 4000));

//Make connection
mongoClient.connect("mongodb://localhost:4000/ShopDB", function(err, db) {
  if(!err) {
    console.log("Connection made!");
  }
 })
