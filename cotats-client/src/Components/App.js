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
      isLogin: true,
      userinfo: {
        id: "1",
        username: "동훈",
        email: "test@",
      },
    };
    this.setIsLogin = this.setIsLogin.bind(this);
  }
  setIsLogin() {
    Axios.post(req, res);

    // post: (req, res) => {

    //   req.session.destroy(() => req.session);
    //   res.redirect("/");
    // },
  }
  /*:
   */
  render() {
    const { isLogin, userinfo } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />

          <Route
            path="/timer"
            render={() => (
              <Timer isLogin={isLogin} setIsLogin={this.setIsLogin} />
            )}
          />
          <Footer />
          <Redirect from="*" to="/" />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
