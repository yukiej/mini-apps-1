import React from 'react';
import Square from './square.jsx';

// constant boardPositions = []

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    let positions = this.props.playState.positions;
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(positions[0])}
          {this.renderSquare(positions[1])}
          {this.renderSquare(positions[2])}
          {this.renderSquare(positions[3])}
          {this.renderSquare(positions[4])}
          {this.renderSquare(positions[5])}
          {this.renderSquare(positions[6])}
        </div>
        <div className="board-row">
          {this.renderSquare(positions[7])}
          {this.renderSquare(positions[8])}
          {this.renderSquare(positions[9])}
          {this.renderSquare(positions[10])}
          {this.renderSquare(positions[11])}
          {this.renderSquare(positions[12])}
          {this.renderSquare(positions[13])}
        </div>
        <div className="board-row">
          {this.renderSquare(positions[14])}
          {this.renderSquare(positions[15])}
          {this.renderSquare(positions[16])}
          {this.renderSquare(positions[17])}
          {this.renderSquare(positions[18])}
          {this.renderSquare(positions[19])}
          {this.renderSquare(positions[20])}
        </div>
        <div className="board-row">
          {this.renderSquare(positions[21])}
          {this.renderSquare(positions[22])}
          {this.renderSquare(positions[23])}
          {this.renderSquare(positions[24])}
          {this.renderSquare(positions[25])}
          {this.renderSquare(positions[26])}
          {this.renderSquare(positions[27])}
        </div>
        <div className="board-row">
          {this.renderSquare(positions[28])}
          {this.renderSquare(positions[29])}
          {this.renderSquare(positions[30])}
          {this.renderSquare(positions[31])}
          {this.renderSquare(positions[32])}
          {this.renderSquare(positions[33])}
          {this.renderSquare(positions[34])}
        </div>
        <div className="board-row">
          {this.renderSquare(positions[35])}
          {this.renderSquare(positions[36])}
          {this.renderSquare(positions[37])}
          {this.renderSquare(positions[38])}
          {this.renderSquare(positions[39])}
          {this.renderSquare(positions[40])}
          {this.renderSquare(positions[41])}
        </div>
      </div>
    )
  }
}

export default Board;

