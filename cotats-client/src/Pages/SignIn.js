import React, { Component } from "react";
import styled from "styled-components";
import { withRouter, Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Typography, TextField, Button } from "@material-ui/core";
import logo from "../img/cotats_w_inner.png";

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
		if (!str.includes("@")) {
			isError = true;
			errorText.emailError = "이메일을 입력해주세요";
		}
		if (isError) {
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
		let input = e.target.value;
		const err = this.validateEmail(input);
		if (!err) {
			this.setState({ email: input });
		}
	};
	inputPwChangeHandler = (e) => {
		this.setState({ password: e.target.value });
	};
	loginHandler = () => {
		// check for errors
		const { email, password } = this.state;
		const { loginChangeHandler } = this.props;
		axios
			.post("http://52.79.251.147:5000/user/signin", {
				email: email,
				password: password,
			})
			.then((res) => {
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
						<SLogo>
							<Anchor to="/">
								<img src={logo} alt="logo" width="230" height="50" />
							</Anchor>
						</SLogo>
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
									onChange={(pw) => this.inputPwChangeHandler(pw)}
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
									}}
									onClick={() => this.loginHandler()}
									disabled={!this.state.password}
								>
									<b style={{ fontWeight: "bold" }}>ENTER</b>
								</Button>
								<Btn
									variant="outlined"
									onClick={() => this.props.history.push("/signup")}
									style={{
										borderRadius: 5,
										border: "1px solid",
										color: "white",
										fontSize: "15px",
										boxShadow: "0 3 0px 2px rgba(30, 30, 30)",
									}}
								>
									<b style={{ fontWeight: "bold" }}>JOIN</b>
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
										코딩하러 갈까요?
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

const SLogo = styled.div`
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 100px;
	margin-top: 130px;
	size: 10px;
`;

const Wrap1 = styled.div`
	width: clamp(23ch, 60%, 23ch);
	height: 70vh;
	margin-top: 40px;
	display: flex;
	flex-direction: column;
`;
const Wrap2 = styled.div`
	display: inline-flex;
`;

const Btn = styled(Button)`
	flex-direction: row;
	padding: 10px;
`;

const Anchor = styled(Link)`
	text-decoration: none;
`;

export default withRouter(SignIn);
