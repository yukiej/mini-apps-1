var express = require('express');
var app = express();
const port = 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/', function (req, res) {
  let inputJSON = req.body.json_name;
  res.send('Here is the req!');
  console.log(inputJSON);
})

app.listen(port, () => console.log(`JSON conversion app listening on port ${port}!`));



