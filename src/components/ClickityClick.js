// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      count: 0,
      toggled: false
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState(previousState => ({
      hasBeenClicked: true,
      count: previousState.count + 1,
      toggled: !previousState.toggled
    }), () => console.log(this.state.count));

  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }
}

export default ClickityClick;