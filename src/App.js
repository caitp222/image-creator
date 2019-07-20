import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./stylesheets/App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <div>Hello World!</div>
      </div>
    );
  }
}

export default hot(module)(App);
