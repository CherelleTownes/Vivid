import React from 'react';
import './App.css';
import Main from "./Components/Main/Main";
// import Header from "./Components/Header/Header"
// import Footer from "./Components/Footer/Footer"
import ButtonApp from './stories/ButtonApp/ButtonApp';
import { Route, Link } from "react-router-dom";
import Bored from './Components/Bored/Bored';
import Jokes from './Components/Jokes/Jokes';
// import Bored from "./Components/Bored/Bored";
// import {BrowserRouter as Router } from "react-router-dom"

function App () {
  return (
    <div>

      <header>
        <Link exact to="/"><p>Logo</p></Link> 
      </header>

  <h1>THIS IS OUTSIDE</h1>
 <Route path="/" exact render={() => (
        <>
          <Main />
          <Link to="/Bored"><ButtonApp button="homePageButtonOne" label="I'm Bored" /></Link>
          <Link to="/Jokes"><ButtonApp button="homePageButtonTwo" label="Humor Me" /></Link>      
        </>
      )} />
      
      <Route path="/Bored" render={() => (
        <Bored/>
      )} />
       <Route path="/Jokes" render={() => (
        <Jokes/>
      )} />

    </div>
  );
}

export default App;

// <Route path="/Profile/:heroId" render={(props) => (
//           <Profile {...props} />
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