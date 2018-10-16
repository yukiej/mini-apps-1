var express = require('express');
var app = express();
const port = 5000;

app.use(express.static('client'));

app.listen(port, () => console.log(`JSON conversion app listening on port ${port}!`));



