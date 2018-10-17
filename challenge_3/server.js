const express = require('express');
const app = express()
const port = process.env.PORT || 4000;

//Set up connection to database?
const MongoClient = require('mongodb').MongoClient
//do I need this?
// const Server = require('mongodb').Server;

//Set up connection to the local server?
// const mongoClient = new MongoClient(new Server('localhost', port));

//Make connection
MongoClient.connect(`mongodb://localhost:${port}/ShopDB`,  { useNewUrlParser: true }, function(err, db) {
  if(!err) {
    console.log("Connection made!");
  }
 })