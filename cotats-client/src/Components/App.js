import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Router from "Components/Router";
import Home from "Pages/Home";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userinfo: {},
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={() => <Home />} />
        <Router />
      </BrowserRouter>
    );
  }
}
export default App;
