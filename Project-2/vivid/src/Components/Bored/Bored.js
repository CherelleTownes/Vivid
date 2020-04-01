import React, { Component } from 'react';
import axios from "axios"




class Bored extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  componentDidMount = async () => {
    const response = await axios("http://www.boredapi.com/api/activity/")
    // debugger;
    console.log(response.data);
  }
  render() {
    return (
      <h1>THIS IS THE BORED PAGE</h1>

    );
  }
}




export default Bored;