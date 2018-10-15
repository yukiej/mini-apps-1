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
  //When a square on the board is clicked
  //Figure out which cell got clicked 
  let row = ev.target.parentNode.rowIndex;
  let col = ev.target.cellIndex;

  //get current value of cell
  let currentCell = bd.rows[row].cells[col]
  let currentVal = currentCell.innerHTML;
  
  // console.log('the value at cell', row, ', ', col, 'is :', currentVal);

  //If the cell is empty
  //update the cell with the value of currentPlayer
  if (currentVal === '&nbsp;') {
    currentCell.innerHTML = currentPlayer; 
    //update the board with the value and position of the clicked cell 
    board[row][col] = currentPlayer;
    //Update currentPlayer to whoever is going next
    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    document.getElementById('next').innerHTML='Next turn: ' + currentPlayer;
  } else {
    console.log('the value at cell', row, ', ', col, 'is :', currentVal);
  }



};

bd.onclick = eventTest;



// var board = document.getElementById('board');
// let col = board.cellIndex;
// let row = board.parentNode.rowIndex;

//If that cell already contains something, do nothing
//If the cell is empty
//  1. update the cell with the value of currentPlayer
//  2. update the board with the value and position of the clicked cell
//  3. Update currentPlayer to whoever is going next

