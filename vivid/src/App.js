import React, { Component } from 'react';
import './App.css';
import axios from "axios"



class App extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  componentDidMount = async () => {
    const response = await axios("http://www.boredapi.com/api/activity/")
    debugger;
    console.log(response.data);
  }
  render() {
    return (
      <h1>Vivid</h1>

    );
  }
}




export default App;


// function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }