import React, { Component } from "react";
import styled from "styled-components";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import { Typography, TextField, Button, Card } from "@material-ui/core";

axios.defaults.withCredentials = false;

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			emailError: "",
			password: "",
			provider: "",
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
			.post("http://52.79.251.147:5000/user/signin", {
				// .post("http://localhost:4000/user/signin", {
				email: email,
				password: password,
			})
			.then((res) => {
				console.log(res);
				console.log("로그인 this.props 무엇?", this.props);
				window.sessionStorage.setItem("user", JSON.stringify(res.data));
				loginChangeHandler();
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
						<RandomBox>dddd</RandomBox>
						<Typography variant="h4" component="p">
							Sign in to your account
						</Typography>
						<br />
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
									InputLabelProps={{
										style: { color: "#fff" },
									}}
									inputProps={{ style: { color: "white" } }}
								/>
							</div>
							<div>
								<TextField
									name="password"
									type="password"
									label="Password"
									onChange={(pw) => this.inputPwChangeHandler(pw)}
									InputLabelProps={{
										style: { color: "#fff" },
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
									}}
									onClick={() => this.loginHandler()}
									disabled={!this.state.password}
								>
									ENTER
								</Button>
								<Btn
									variant="outlined"
									onClick={() => this.props.history.push("/signup")}
									style={{
										borderRadius: 5,
										// backgroundColor: "#FFFFFF",
										border: "1px solid",
										color: "white",
										fontSize: "15px",
									}}
								>
									JOIN
								</Btn>
							</Wrap2>
						</Wrap1>
					</Background>
				) : (
					<Background>
						<Wrap1>
							<Wrap2>
								<h3>로그인되어 있습니다</h3>
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
	height: 100vh;
	width: 100%;
`;

const RandomBox = styled.div`
	background-color: black;
	height: 60%;
`;

const HeadTitle = styled(Typography)`
	height: 40vh;
`;

const Wrap1 = styled.div`
	width: clamp(23ch, 60%, 23ch);
	height: 70vh;

	display: flex;
	flex-direction: column;
`;

const Wrap2 = styled.div`
	/* height: 125px; */
	/* width: 100%; */
	display: inline-flex;
	/* place-content: center; */
	/* 버튼 두개가 나란히 있도록 */
`;

const Locat = styled.div``;

const Btn = styled(Button)`
	flex-direction: row;
	padding: 10px;
`;

export default withRouter(SignIn);
