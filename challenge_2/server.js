let express = require('express');
let app = express();
let converter = require('./client/app.js')
const port = 5000;
console.log(converter);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client'));

let template = function(csv) {
 return `<html>
<head>
<body>
  <h1>JSON to CSV converter</h1>
  <form action="/" method="post">
    <div>
      <label for="json">Paste JSON into the textbox</label>
      <textarea type="text" id="json" name="json_name">JSON goes here!</textarea> 
    </div>
    <button type="submit">Get CSV</button>
  </form>
  <p>
  ${csv}
  </p>
  <script src="app.js"></script>
</body>
</head>
</html>` 
}


app.post('/', function (req, res) {
  res.statusCode = 200;
  let inputJSON = req.body.json_name;
  //convert JSON to csv
  let csvFile = converter.makeCSV(inputJSON);
  // var testCSV = `firstName,lastName,county,city,role,sales
  // // \nJoshie,Wyattson,San Mateo,San Mateo,Broker,1000000`;
  res.send(template("Hello"));
  console.log(csvFile);
})

app.listen(port, () => console.log(`JSON conversion app listening on port ${port}!`));

