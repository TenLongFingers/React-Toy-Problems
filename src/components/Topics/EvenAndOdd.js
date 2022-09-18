import React, { Component } from "react";
class EvenAndOdd extends Component {
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" />
        <button className="confirmationButton">Split</button>
        <span className="resultsBox" />
        <span className="resultsBox" />
      </div>
    );
    //function that split evens into one array and odds into another (outside of the component? Can I add it at the bottom?)
  }
}

export default EvenAndOdd;
