import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../theme";
import axios from "axios";

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
      isReady: false,
    };
  }

  // handle login state
  // loginChangeHandler = () => {
  //   const { isLogin } = this.state;
  //   this.setState({
  //     isLogin: !isLogin,
  //   });
  // };

  loginChangeHandler = () => {
    const { isLogin } = this.state;
    this.setState({
      isLogin: true,
    });
  };

  logoutChangeHandler = () => {
    const { isLogin } = this.state;
    this.setState({
      isLogin: false,
    });

    window.sessionStorage.clear();
  };

  // readyChange = () => {
  //   const { isReady } = this.state;
  //   this.setState({
  //     isReady: !isReady,
  //   });
  // };
  checkLoginStatus = () => {
    axios.get("http://3.18.213.157:5000/user/signin").then((res) => {
      if (res.data.logged_in && this.state.isLogin === false) {
        console.log(res.data);
        this.setState({ isLogin: true });
      } else if (!res.data.logged_in && this.state.isLogin === true) {
        this.setState({ isLogin: false });
      }
    });
  };

  componentDidMount = () => {
    const email = window.sessionStorage.getItem("email");

    if (email) {
      this.loginChangeHandler();
    } else {
      this.logoutChangeHandler();
    }
  };

  render() {
    return (
      <>
        <Fragment>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
              <BrowserRouter>
                <Header
                  isLogin={this.state.isLogin}
                  loginChangeHandler={() => this.loginChangeHandler()}
                  logoutChangeHandler={() => this.logoutChangeHandler()}
                />
                <Route
                  exact
                  path="/"
                  render={() => {
                    if (this.state.isLogin) {
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
                      isLogin={this.state.isLogin}
                      loginChangeHandler={() => this.loginChangeHandler()}
                      // handleLogoutChange={() => this.handleLogoutChange()}
                    />
                  )}
                />
                <Route
                  path="/user/signup"
                  render={() => <SignUp isLogin={this.state.isLogin} />}
                />
                <Route
                  path="/timer"
                  render={() => (
                    <Timer
                      isLogin={this.state.isLogin}
                      // loginChangeHandler={() => this.loginChangeHandler()}
                    />
                  )}
                />
                <Redirect from="*" to="/" />
                <Footer />
              </BrowserRouter>
            </Container>
          </ThemeProvider>
        </Fragment>
        {/* {this.state.isReady === true ? (
          
        ) : (
          <div>loading</div>
        )} */}
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
		
	}
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f5f6fa;
  & * {
    box-sizing: border-box;
  }
`;

export default App;
