var currentPlayer = 'X';
var board = [
  [undefined, undefined, undefined], 
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
  ];
var numTurns = 0; 

let bd = document.getElementById('board');
let resetButton = document.getElementById('reset');

var eventTest = function(ev) {
  //Figure out which cell got clicked 
  let row = ev.target.parentNode.rowIndex;
  let col = ev.target.cellIndex;

  //get current value of cell
  let currentCell = bd.rows[row].cells[col];
  let currentVal = currentCell.innerHTML;
  

  //If clicked cell is empty, update the cell with value of currentPlayer
  if (currentVal === '&nbsp;') {
    currentCell.innerHTML = currentPlayer; 
    board[row][col] = currentPlayer;
    numTurns += 1;
    //Check for winner
    if (checkForWinner(currentPlayer, board)){
      let message = `${currentPlayer} is the winner, hooray!!`;
      alert(message);
      return;
    }

    if (numTurns === 9) {
      alert("We have a tie! \nGame over");
      return
    }

    //Update currentPlayer to whoever is going next
    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    document.getElementById('next').innerHTML='Next turn: ' + currentPlayer;
  }
};

bd.onclick = eventTest;


//Checking for winner by row, col, and by diagonal
//input: most recent player (X or O), board after last play
var rowWin = function(player, board) {
  for (let row = 0; row < board.length; row += 1) {
    currentRow = board[row];
    if (currentRow.every(x => x === player)) {
      return true;
    } 
  }
  return false; 
}

//by Col
var colWin = function(player, board) {
  for (let col = 0; col < board.length; col += 1) {
    let allSame = true; 
    for (let row = 0; row < board.length; row += 1) {
      if (board[row][col] !== player) {
        allSame = false; 
      }
    }
    if (allSame) {
      return true;
    } else {
      return false;
    }
  }
}
//by diagonal
var diagonalWin = function(player, board) {
  let allSameForward = true;
  //forward diagonal
  for (let col = 0; col < board.length; col += 1) {
    if (board[col][col] !== player) {
      allSameForward = false;
    }
  }

  //backward diagonal
  let allSameBackward = true;
  for (let col = 0; col < board.length; col += 1) {
    for (let row = 2; row >= 0; row -= 1) {
      if (board[row][col] !== player) {
        allSameBackward = false;
      }
    }
  }

  return (allSameForward || allSameBackward);
}

//Functions to check for winner
var checkForWinner = function(player, board) {
  return rowWin(player, board) || colWin(player, board) || diagonalWin(player, board)
}


//resetting board for new round
var resetGame = function() {
  board = [
  [undefined, undefined, undefined], 
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
  ];

  numTurns = 0; 

  //for every cell of the table, reset value to &nbsp;
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board.length; col += 1) {
      let currentCell = bd.rows[row].cells[col];
      currentCell.innerHTML = '&nbsp';
    }
  }
}

resetButton.onclick = resetGame;

