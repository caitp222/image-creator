import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./stylesheets/App.css";
import ImageDisplay from './components/imageDisplay';

class App extends Component{
  render(){
    return(
      <div className="App">
        <ImageDisplay />
      </div>
    );
  }
}

export default hot(module)(App);
