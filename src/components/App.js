import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Location from "./Location";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/location/:location" component={Location} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
