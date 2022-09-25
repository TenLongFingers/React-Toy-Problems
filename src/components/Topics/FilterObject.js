import React, { Component } from "react";

//constructor

class FilterObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unFilteredArray: [
        {
          name: "Jimmy Joe",
          title: "Hack0r",
          age: 12,
        },
        {
          name: "Jeremy Schrader",
          age: 24,
          hairColor: "brown",
        },
        {
          name: "Carly Armstrong",
          title: "CEO",
        },
      ],
      userinput: "",
      filteredArray: [],
    };
  }

  //props

  handleChange(value) {
    this.setState({ userinput: value });
  }

  submitFilterFunction(userinput) {
    let unFilteredArr = this.state.unFilteredArray;
    let newFilteredArr = [];

    for (let i = 0; i < unFilteredArr.length; i++) {
      if (unFilteredArr.includes(userinput)) {
        newFilteredArr.push(unFilteredArr[i]);
      }
    }
    this.setState({ filteredArray: newFilteredArr });
  }

  //JSX
  render() {
    return (
      <div className="puzzleBox filterObject PB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.submitFilterFunction(this.state.userinput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectPB"></span>
      </div>
    );
  }
}

export default FilterObject;
