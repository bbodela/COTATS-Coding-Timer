import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
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
	*/
	loginHandler = () => {
		// check for errors
		const { email, password } = this.state;
		const { handleLoginChange } = this.props;
		axios
			.post("http://3.18.213.157:5000/user/signin", {
				email: email,
				password: password,
			})
			.then((res) => {
				console.log("로그인 서버응답", res, this.props);
				handleLoginChange();
				this.props.history.push("/timer");
				// 로그인요청 응답: 해당 유저의 모든 데이터
				// 로그인성공 시 timer로 redirect
				// 로그아웃은 timer화면으로 갔을 때 Header에 나오게 하면 좋을것같습니다
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<>
				<div>
					<Typography variant="h4" component="p">
						로그인
					</Typography>
				</div>
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
				<div>
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
				</div>
			</>
		);
	}
}

export default withRouter(SignIn);
