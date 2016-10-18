import React, { Component } from 'react';
import Header from "./header.js";
import Jumbotron from "./jumbotron.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
