import React, { Component } from "react";

//constructor
class EvenAndOdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  //props
  handleChange(value) {
    this.setState({ userInput: value });
  }

  sortEvenOdds(userInput) {
    let userInputArray = userInput.split(",");
    let oddNums = [];
    let evenNums = [];
    for (let i = 0; i < userInputArray.length; i++) {
      if (userInputArray[i] % 2 === 0) {
        evenNums.push(userInputArray[i]);
      } else {
        oddNums.push(userInputArray[i]);
      }
    }
    this.setState({ evenArray: evenNums, oddArray: oddNums });
  }

  //JSX
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.sortEvenOdds(this.state.userInput)}
        >
          Split
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
