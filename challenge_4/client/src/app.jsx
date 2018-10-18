import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
      ], 
      currentPlayer: "Red"
    };
  }

  render() {
    return (
      <div>
        <h3>Next turn:</h3>
        <p className="currentPlayer">{this.currentPlayer}</p>
        <Board playState={this.board, this.currentPlayer} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
  );