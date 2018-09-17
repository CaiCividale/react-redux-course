import React, { Component } from 'react';
import './App.css';
import Clock from  './Clock'

 
class App extends Component {

  render() {
    return (
      <React.Fragment>
      <div className="App">
       <h1> My first React App</h1>
      </div>
     
      <Clock secs="1" country="Italy" timezone="0" />
      <Clock  secs="2" country="Russia"  timezone="2" />
      <Clock  secs="3" country="Cuba" timezone="-6" ></Clock>
      </React.Fragment>
    );
  }
}

export default App;
