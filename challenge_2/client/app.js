var jsonConverter = function(input) {
  //get all the col names and put them in a dictionary
  var colNames = [];
  var row = [];
  var rows = [];
  var keylist = Object.keys(input);

 //Make array of column names from root object
  for (let k = 0; k < keylist.length; k += 1) {
    if (keylist[k] !== "children") {
      colNames.push(keylist[k]);
    }
  }

  for (let i = 0; i < colNames.length; i += 1) {
    if (input[colNames[i]] !== undefined) {
      row.push(input[colNames[i]]);
    } else {
      row.push(' ');
    }
  }
  rows.push(row.join(','));

 //if the object has children, make rows for them too 
 if (input.children !== undefined && input.children.length > 0) {
  for (let i = 0; i < input.children.length; i += 1) {
    let child = input.children[i];
    rows = rows.concat(jsonConverter(child));

  }
 }
return rows; 
}

//inputs: input is a jSON obj
var makeCSV = function(input) {
  let rows = exports.jsonConverter(input);
  let keylist = Object.keys(input);
  let colNames = [];

 //Make array of column names from root object
  for (let k = 0; k < keylist.length; k += 1) {
    if (keylist[k] !== "children") {
      colNames.push(keylist[k]);
    }
  }

  let file = [colNames.join(',')].concat(rows);
  return file.join('\n');
}

module.exports = {
  makeCSV: makeCSV, 
jsonConverter: jsonConverter
};