import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "Pages/Home";
import SignIn from "Pages/SignIn";
import SignUp from "Pages/SignUp";
import Timer from "Pages/Timer";
import Header from "Components/Header";
import Footer from "Components/Footer";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
    };
  }

  // handle login state
  handleLoginChange = () => {
    const { isLogin } = this.state;
    this.setState({
      isLogin: true,
    });
  };
  handleLogoutChange = () => {
    const { isLogin } = this.state;
    this.setState({
      isLogin: false,
    });
  };
  componentWillMount = () => {
    const { isLogin } = this.state;
    if (!isLogin) {
      this.handleLoginChange();
    }
  };

  render() {
    const { isLogin } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route
            exact
            path="/"
            render={() => {
              if (isLogin) {
                return <Redirect to="/Timer" />;
              } else {
                return <Route path="/" component={Home} />;
              }
            }}
          />
          <Route
            path="/user/signin"
            render={() => (
              <SignIn
                isLogin={isLogin}
                handleLoginChange={() => this.handleLoginChange()}
                handleLogoutChange={() => this.handleLogoutChange()}
              />
            )}
          />
          <Route
            path="/user/signup"
            render={() => <SignUp isLogin={isLogin} />}
            this={this}
          />
          <Route
            path="/timer"
            render={() => (
              <Timer
                isLogin={isLogin}
                handleLogoutChange={() => this.handleLogoutChange()}
              />
            )}
          />
          <Footer />
          <Redirect from="*" to="/" />
        </BrowserRouter>
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </div>
    );
  }
}

export default App;
