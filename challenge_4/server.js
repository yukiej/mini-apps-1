const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');

//middleware
// app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(express.static('./client/dist'));

console.log("Current static folder :", path.join(__dirname, '/client/dist'));

//routes
app.get('/', (req, res) => 
  res.send('Ready to play connect four?!'));


//start listening!
app.listen(port, () => {
  console.log(`ConnectFour app is listening on port ${port}!`)
});