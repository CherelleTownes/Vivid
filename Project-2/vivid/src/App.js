import React from 'react';
import './App.css';
import Main from "./Components/Main/Main"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import ButtonApp from './stories/ButtonApp/ButtonApp';
import { Route, Link } from "react-router-dom";
import Bored from "./Components/Bored/Bored"





function App () {
  return (
    <div>

      <header>
        <Link to="/">
        <p>Logo</p>
        </Link> 
      </header>
      
      <h1>THIS IS THE HOMEPAGE</h1>

      <Main />
      
      <Link to="/Bored">
        <ButtonApp button="homePageButtonOne" label="I'm Bored" />
        </Link>
      <ButtonApp button="homePageButtonTwo" label="Humor Me"/>
      <main>
        <Route path="/"component={App}/>
        <Route path="/Bored"component={Bored}/>
      </main>
    </div>
  );
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