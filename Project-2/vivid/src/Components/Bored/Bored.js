import React, { Component } from 'react';
import axios from "axios"
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import ButtonBoredReload from '../../stories/ButtonBored/ButtonBored';
import { Route, Link } from "react-router-dom";
import ButtonApp from '../../stories/ButtonApp/ButtonApp';


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
    this.setState({ results: response.data });

  }
  render() {
    const { results } = this.state;
    return (
      <div>
        <header>
        <Link exact to="/"><p>Logo</p></Link> 
      </header>

        <h1>THIS IS THE BORED PAGE</h1>
        <Header />

        <div>
          <h2>Activity</h2>
          <h3>{results.activity}</h3>
          <h2>Category</h2>
          <h3>{results.type}</h3>
          <h2>Number of Participants Needed</h2>
          <h3>{results.participants}</h3>
        </div>

        <Link to="/Bored"><ButtonBoredReload button="jokePageButtonOne" label="Give Me A Different Task" /></Link>
        <Link to="/Jokes"><ButtonApp button="homePageButtonTwo" label="Humor Me"/></Link>

        {/* <Route path="/" exact render={() => (
        <>
          <Link to="/Bored"><ButtonJokes button="jokePageButtonOne" label="I'm Bored, Give Me A Task Instead" /></Link>
          <Link to="/Jokes"><ButtonJokes button="jokesPageButtonTwo" label="Humor Me Again" /></Link>      
        </>
      )} />
      
      <Route path="/Bored" render={() => (
        <Bored/>
      )} />
       <Route path="/Jokes" render={() => (
        <Jokes/>
      )} /> */}


        <footer>
          <Footer />
        </footer>
      </div>


    );
  }
}




export default Bored;