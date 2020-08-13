import React, { Component } from "react";
import styled from "styled-components";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  inputChangeHandler = (val) => (e) => {
    return console.log(e.target), console.log(val);
  };
  // inputChangeHandler = (inputVal) => {
  // 	this.setState({
  // 		email: e.target.email,
  // 		password: e.target.password,
  // 	});
  // };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>로그인</h1>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={this.inputChangeHandler("email")}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={this.inputChangeHandler("password")}
          />
        </div>
        <div>
          <button type="submit">로그인</button>
          <button>회원가입</button>
        </div>
      </div>
    );
  }
}
export default SignIn;
