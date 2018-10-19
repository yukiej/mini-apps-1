import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardPositions: [...Array(42).keys()],
      plays: new Array(42).fill(0),
      currentPlayer: "Red"
    };
  }

  render() {
    console.log("Plays are", this.state.plays);
    return (
      <div>
        <h3>Next turn:</h3>
        <p className="currentPlayer">{this.state.currentPlayer}</p>
        <Board playState={{board: this.state.board, positions: this.state.boardPositions, currentPlayer: this.state.currentPlayer}} />
      </div>
    );
  }

  handleClick() {
    //figure out which position (or column) got clicked
    //check if the column has empty spaces
    //if the column has empty spaces, change the topmost box in that column to the color of the current player
    //update current player
  }

  updatePlayer() {
    let nextPlayer = (this.state.currentPlayer === "Red") ? "Yellow" : "Red";
    this.state.currentPlayer = nextPlayer;
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('app')
  );