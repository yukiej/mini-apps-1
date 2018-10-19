import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => {console.log("Just clicked on square ", this.props.value)}}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;