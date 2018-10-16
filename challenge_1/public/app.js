//State of game
var state = {
  currentPlayer: 'X',
  lastWinner: undefined,
  board: [
  [undefined, undefined, undefined], 
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
  ],
  numTurns: 0,
  gameDone: false,
  score: {
    X:0,
    O:0
  }
};

var userInputs = {
  X: undefined,
  O: undefined
}

var elements = {
  bd: document.getElementById('board'),
  resetButton: document.getElementById('reset')
}

//Get player's names on pageload and set state accordingly
var getNames = function() {
  userInputs.X = prompt("Hi Player X! \n Please enter your name.") || 'Player X';
  userInputs.O = prompt("Hi Player O! \n Please enter your name.") || 'Player O';

  let text = `${userInputs.X} (X) vs. ${userInputs.O} (O)`;
  document.getElementById('scoreboard').innerHTML = text;
}


//Functions that update state
var eventTest = function(ev) {
  //Figure out which cell got clicked 
  let currentCell = ev.target;
  let row = currentCell.id.split(',')[0];
  let col = currentCell.id.split(',')[1];


  //get current value of cell
  let currentVal = currentCell.innerHTML;

  //If clicked cell is empty, update the cell with value of currentPlayer
  if (currentVal === '&nbsp;' && !state.gameDone) {
    currentCell.innerHTML = state.currentPlayer; 
    state.board[row][col] = state.currentPlayer;
    state.numTurns += 1;
    //Check for winner
    if (checkForWinner(state.currentPlayer, state.board)){
      let message = `${userInputs[state.currentPlayer]} is the winner, hooray!!`;
      state.lastWinner = state.currentPlayer;
      updateScores(state.lastWinner);
      state.gameDone = true;
      alert(message);
      return;
    }

    if (state.numTurns === 9) {
      alert("We have a tie! \nGame over");
      return;
    }

    //If no one won and there is no tie, update currentPlayer to whoever is going next
    if (state.currentPlayer === 'X') {
      state.currentPlayer = 'O';
    } else {
      state.currentPlayer = 'X';
    }
    document.getElementById('next').innerHTML='Next turn: ' + state.currentPlayer;
  }
};

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
    }
  }
  return false;
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
  let col = 0; 
  for (let row = 2; row >= 0; row -= 1) {
    if (board[row][col] !== player) {
      allSameBackward = false;
    }
    col += 1; 
    }
    return (allSameForward || allSameBackward);
  }

var checkForWinner = function(player, board) {
  return rowWin(player, board) || colWin(player, board) || diagonalWin(player, board)
}


//resetting board for new round
var resetGame = function() {
  state.board = [
  [undefined, undefined, undefined], 
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
  ];

  state.numTurns = 0; 
  state.currentPlayer = state.lastWinner;
  state.gameDone = false;

  //for every cell of the table, reset value to &nbsp;
  for (let row = 0; row < state.board.length; row += 1) {
    for (let col = 0; col < state.board.length; col += 1) {
      let currentCellID = String(row) + "," + String(col);
      document.getElementById(currentCellID).innerHTML = '&nbsp';
    }
  }
}

//disabling board after someone wins


//Updating scoreboard
var updateScores = function(winner) {
  if (winner === 'X') {
    state.score.X += 1; 
  } else {
    state.score.O += 1; 
  }
  document.getElementById('score').innerHTML = `${state.score.X} : ${state.score.O}`
}

//Setting click events

elements.bd.onclick = eventTest;
elements.resetButton.onclick = resetGame;


