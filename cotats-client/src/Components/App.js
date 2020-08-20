import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import axios from "axios";
import theme from "../theme";

import Home from "Pages/Home";
import SignIn from "Pages/SignIn";
import SignUp from "Pages/SignUp";
import Timer from "Pages/Timer";
import Header from "Components/Header";
import Footer from "Components/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
    };
  }

  // handle login state
  loginChangeHandler = () => {
    const { isLogin } = this.state;
    this.setState({
      isLogin: !isLogin,
    });
  };
  logoutChangeHandler = () => {
    window.sessionStorage.clear();
    const { isLogin } = this.state;
    this.setState({
      isLogin: !isLogin,
    });
  };

  componentDidMount = () => {
    if (window.sessionStorage.user) {
      this.loginChangeHandler();
    } else {
      this.logoutChangeHandler();
    }
  };

  render() {
    const { isLogin } = this.state;
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Container>
            <BrowserRouter>
              <Header
                isLogin={isLogin}
                loginChangeHandler={() => this.loginChangeHandler()}
                logoutChangeHandler={() => this.logoutChangeHandler()}
              />
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <Route path="/">
                      <Home isLogin={isLogin} />
                    </Route>
                  );
                }}
              />
              <Route
                path="/signin"
                render={() => (
                  <SignIn
                    isLogin={isLogin}
                    loginChangeHandler={() => this.loginChangeHandler()}
                    logoutChangeHandler={() => this.logoutChangeHandler()}
                    // handleLogoutChange={() => this.handleLogoutChange()}
                  />
                )}
              />
              <Route
                path="/signup"
                render={() => <SignUp isLogin={isLogin} />}
              />
              <Route
                path="/timer"
                render={() => (
                  <Timer
                    isLogin={isLogin}
                    // loginChangeHandler={() => this.loginChangeHandler()}
                  />
                )}
              />
              <Redirect from="*" to="/timer" />
              {/* 수정할것~!~!~!~위에꺼 */}
            </BrowserRouter>
          </Container>
        </ThemeProvider>
      </Fragment>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
		height: 100%;
	width: 100%;
	}
`;

const Container = styled.div`
  background-color: #212121;
  & * {
    box-sizing: border-box;
    font-family: "Source Sans Pro";
  }
`;

export default App;
