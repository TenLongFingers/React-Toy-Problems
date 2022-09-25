import React, { Component } from "react";

//constructor

class FilterObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
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
      unFilteredArray: [],
      userinput: "",
      filteredArray: [],
    };
  }

  //JSX
  render() {
    return (
      <div className="puzzleBox filterObject PB">
        <h4>Filter Object</h4>
        <span className="puzzleText"></span>
        <input className="inputLine"></input>
        <button className="confirmationButton"></button>
        <span className="resultsBox filterObjectPB"></span>
      </div>
    );
  }
}

export default FilterObject;
