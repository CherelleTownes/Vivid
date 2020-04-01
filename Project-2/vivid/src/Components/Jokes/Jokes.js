import React from "react";
import axios from "axios";

class Jokes extends Components {
  constructor() {
    super();
    this.state = {
    results: []
  }
  }
  componentDidMount = async() => {
    const response = await axios("https://sv443.net/jokeapi")
    debugger;
  console.log(response.data);
  }
  render() {
    return (
      <h1>THIS IS THE JOKES PAGE</h1>
    );
  }
 
}

export default Jokes;