import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Typography, TextField, Button } from "@material-ui/core";
import axios from "axios";
import logo from "../img/cotats_w_inner.png";

axios.defaults.withCredentials = false;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      nameError: "",
      email: "",
      emailError: "",
      password: "",
      password2: "",
      pwCheckError: "",
      pwLengthError: "",
      provider: "",
    };
  }

  validateName = (str) => {
    let isError = false;
    const errorText = {};
    if (str.length < 2) {
      isError = true;
      errorText.nameError = "이름은 최소 2자 이상이어야 합니다";
    }
    if (isError) {
      this.setState({
        username: str,
        nameError: errorText.nameError,
      });
    }
    if (!isError) {
      this.setState({
        username: str,
        nameError: "",
      });
    }
  };

  validateEmail = (str) => {
    let isError = false;
    const errorText = {};
    console.log("호출성공", str);
    if (!str.includes("@")) {
      isError = true;
      errorText.emailError = "이메일을 입력해주세요";
    }
    if (isError) {
      //에러가있으면
      this.setState({
        email: str,
        emailError: errorText.emailError,
      });
    }
    if (!isError) {
      this.setState({
        email: str,
        emailError: "",
      });
    }
  };

  validatePwLeng = (str) => {
    let isError = false;
    const errorText = {};

    if (str.length < 6) {
      isError = true;
      errorText.pwLengthError = "비밀번호는 6자 이상이어야 합니다";
    }
    if (isError) {
      this.setState({
        password: str,
        pwLengthError: errorText.pwLengthError,
      });
    }
    if (!isError) {
      this.setState({
        password: str,
        pwLengthError: "",
      });
    }
  };

  validateConfirmPw = (str) => {
    let isError = false;
    const errorText = {};

    if (this.state.password !== str) {
      isError = true;
      errorText.pwCheckError = "비밀번호가 일치하지 않습니다";
    }
    if (isError) {
      this.setState({
        password2: str,
        pwCheckError: errorText.pwCheckError,
      });
    }
    if (!isError) {
      this.setState({
        password2: str,
        pwCheckError: "",
      });
    }
  };

  nameChangeHandler = (e) => {
    let input = e.target.value;
    const err = this.validateName(input);
    if (!err) {
      this.setState({ username: input });
    }
  };

  emailChangeHandler = (e) => {
    let input = e.target.value;
    const err = this.validateEmail(input);
    if (!err) {
      this.setState({ email: input });
    }
  };

  pwChangeHandler = (e) => {
    const err = this.validatePwLeng(e.target.value);
    if (!err) {
      this.setState({
        password: e.target.value,
      });
      console.log(this.state.password);
    }
  };

  confirmpwHandler = (e) => {
    const err = this.validateConfirmPw(e.target.value);
    if (!err) {
      this.setState({
        password2: e.target.value,
      });
    }
  };

  joinHandler = () => {
    const { email, password, username } = this.state;
    axios
      .post("http://3.34.126.28:5000/user/signup", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        this.props.history.push("/signin");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Background>
        <div>
          <SLogo>
            <img src={logo} alt="logo" width="230" height="50" />
          </SLogo>
          <Typography variant="h4" component="p">
            Registration
          </Typography>
        </div>
        <Wrap1>
          <div>
            <TextField
              autoFocus
              name="name"
              type="name"
              label="Nickname"
              onKeyUp={(name) => this.nameChangeHandler(name)}
              error={this.state.nameError === "" ? false : true}
              helperText={this.state.nameError}
              InputLabelProps={{
                style: { color: "#808080" },
              }}
              inputProps={{ style: { color: "white" } }}
            />
          </div>
          <div>
            <TextField
              name="email"
              type="email"
              label="E-mail"
              onChange={(e) => this.emailChangeHandler(e)}
              error={this.state.emailError === "" ? false : true}
              helperText={this.state.emailError}
              InputLabelProps={{
                style: { color: "#808080" },
              }}
              inputProps={{ style: { color: "white" } }}
            />
          </div>
          <div>
            <TextField
              name="password"
              type="password"
              label="Password"
              onChange={(e) => this.pwChangeHandler(e)}
              error={this.state.pwLengthError === "" ? false : true}
              helperText={this.state.pwLengthError}
              InputLabelProps={{
                style: { color: "#808080" },
              }}
              inputProps={{ style: { color: "white" } }}
            />
          </div>
          <div>
            <TextField
              name="password"
              type="password"
              label="Confirm Password"
              onChange={(e) => this.confirmpwHandler(e)}
              error={this.state.pwCheckError === "" ? false : true}
              helperText={this.state.pwCheckError}
              InputLabelProps={{
                style: { color: "#808080" },
              }}
              inputProps={{ style: { color: "white" } }}
            />
          </div>
          <br />
          <Wrap2>
            <Button
              variant="contained"
              type="submit"
              style={{
                borderRadius: 5,
                backgroundColor: "#FFFFFF",
                fontSize: "15px",
                boxShadow: "0 3px 5px 2px rgba(30, 30, 30)",
              }}
              disabled={!this.state.password2}
              onClick={() => this.joinHandler()}>
              <b style={{ color: "rgba(30, 30, 30)", fontWeight: "bold" }}>
                join!
              </b>
            </Button>
          </Wrap2>
        </Wrap1>
      </Background>
    );
  }
}

const Background = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const Wrap1 = styled.div`
  width: clamp(23ch, 60%, 23ch);
  height: 70vh;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
`;

const Wrap2 = styled.div`
  height: 125px;
  width: 100%;
`;
const SLogo = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 5px solid red; */
  margin-bottom: 70px;
  margin-top: 100px;
  size: 10px;
`;

export default withRouter(SignUp);
