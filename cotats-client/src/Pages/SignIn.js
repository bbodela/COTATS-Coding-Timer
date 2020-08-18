import React, { Component } from "react";
import styled from "styled-components";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import { Typography, TextField, Button } from "@material-ui/core";

axios.defaults.withCredentials = false;

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			emailError: "",
			password: "",
		};
	}

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

	inputEmailChangeHandler = (e) => {
		console.log("email내용", e.target.value);
		let input = e.target.value;
		const err = this.validateEmail(input);

		if (!err) {
			this.setState({ email: input });
		}
	};

	inputPwChangeHandler = (e) => {
		this.setState({ password: e.target.value });
	};

	/* 유효성 검사
		email: email형식에 부합하도록
		pw: 비밀번호는 6자 이상
		무조건 입력을해야 버튼이 눌러지도록>> 입력값이없으면 일치하는 유저가없어서 어차피 서버응답이 에러
			// 입력 폼 입력안되면 버튼눌려지지 않는 에러 추가
	*/
	loginHandler = () => {
		// check for errors
		const { email, password } = this.state;
		const { loginChangeHandler } = this.props;

		axios
			.post("http://3.18.213.157:5000/user/signin", {
				// .post("http://localhost:5000/user/signin", {
				email: email,
				password: password,
			})
			.then((res) => {
				console.log("로그인 this.props 무엇?", this.props);
				console.log("로그인 응답", res.data);
				loginChangeHandler();
				// if(res.)
				console.log("로그인after this.props 무엇?", this.props);
				if (this.props.isLogin === true) {
					this.props.history.push("/timer");
				} else {
					this.props.history.push("/");
				}
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<>
				{this.props.isLogin === false ? (
					<Background>
						<div>
							<Typography variant="h4" component="p">
								로그인
							</Typography>
						</div>
						<Wrap1>
							<div>
								<TextField
									autoFocus
									name="email"
									type="email"
									label="E-mail"
									onChange={(email) => this.inputEmailChangeHandler(email)}
									error={this.state.emailError === "" ? false : true}
									helperText={this.state.emailError}
								/>
							</div>
							<div>
								<TextField
									name="password"
									type="password"
									label="Password"
									onChange={(pw) => this.inputPwChangeHandler(pw)}
								/>
							</div>
							<br />
							<Wrap2>
								<Button
									variant="contained"
									color="primary"
									onClick={() => this.loginHandler()}
								>
									공부시작
								</Button>
								<Button
									variant="outlined"
									color="primary"
									onClick={() => this.props.history.push("/user/signup")}
								>
									회원가입
								</Button>
							</Wrap2>
						</Wrap1>
					</Background>
				) : (
					<Background>
						<Wrap1>
							<Wrap2>
								<h3>로그인되어 있습니다💕️</h3>
								<Redirect to="/timer">
									<Button variant="outlined" color="primary">
										💻️코딩하러 갈까요?💻️
									</Button>
								</Redirect>
							</Wrap2>
						</Wrap1>
					</Background>
				)}
			</>
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

export default withRouter(SignIn);
