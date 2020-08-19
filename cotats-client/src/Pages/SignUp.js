import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Typography, TextField, Button } from "@material-ui/core";
import axios from "axios";

axios.defaults.withCredentials = false;

/* 유효성 검사
		username: 최소 2글자 이상
		email: email형식에 부합하도록
		pw: 비밀번호는 6자 이상
		무조건 입력을해야 버튼이 눌러지도록>> 입력값이없으면 일치하는 유저가없어서 어차피 서버응답이 에러
			// 입력 폼 입력안되면 버튼눌려지지 않는 에러 추가
	*/

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
        errorText: errorText.nameError,
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
      .post("http://3.18.213.157:5000/user/signup", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        this.props.history.push("/user/signin");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Background>
        <div>
          <Typography variant="h4" component="p">
            회원가입
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
            />
          </div>
          <br />
          <Wrap2>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              onClick={() => this.joinHandler()}>
              가입
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
  height: 74%;
  width: 100%;
`;

const Wrap1 = styled.div`
  width: clamp(23ch, 60%, 23ch);
  display: flex;
  flex-direction: column;
`;

const Wrap2 = styled.div`
  height: 125px;
  width: 100%;
`;

export default withRouter(SignUp);
