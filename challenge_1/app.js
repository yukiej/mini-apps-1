var currentPlayer = 'X';
var board = [
  [undefined, undefined, undefined], 
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
  ];

// var clickFunc = function() {
//   let board = document.getElementById('board');
//   board.onclick = eventTest;
// };

let bd = document.getElementById('board');

var eventTest = function(ev) {
  console.log('just clicked on table col ', ev.target.cellIndex, "and row ", ev.target.parentNode.rowIndex);
};

bd.onclick = eventTest;


//When a square on the board is clicked
//Figure out which cell got clicked
// var board = document.getElementById('board');
// let col = board.cellIndex;
// let row = board.parentNode.rowIndex;

//If that cell already contains something, do nothing
//If the cell is empty
//  1. update the cell with the value of currentPlayer
//  2. update the board with the value and position of the clicked cell
//  3. Update currentPlayer to whoever is going next

