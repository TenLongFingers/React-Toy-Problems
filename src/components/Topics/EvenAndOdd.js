import React, { Component } from "react";
class EvenAndOdd extends Component {
  //constructor function here
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  handleChange = (val) => {
    this.setState({ userInput: val });
  };

  sortEvenOdds = (number) => {
    //grab the input, loop through one by one, and push it into evenArray or oddArray
  };

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="confirmationButton">Split</button>
        <span className="resultsBox" />
        <span className="resultsBox" />
      </div>
    );
    //function that split evens into one array and odds into another (outside of the component? Can I add it at the bottom?)
  }
}

export default EvenAndOdd;
