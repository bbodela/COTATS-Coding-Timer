import React, { useState } from "react";
import styled from "styled-components";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { Typography, TextField, Button, Card } from "@material-ui/core";
import logo from "../img/cotats_w_inner.png";

axios.defaults.withCredentials = false;

const useMail = (inputValue, validator) => {
	const [email, setEmail] = useState(inputValue);
	const onChange = e => {
		const {
			target: { value },
		} = e;

		if (typeof validator === "function") {
			setEmail(value);
			validator(value);
		}
	};
	return { email, onChange };
};

const usePassword = (inputValue, validator) => {
	const [password, setPassword] = useState(inputValue);
	const onChange = e => {
		const {
			target: { value },
		} = e;

		if (typeof validator === "function") {
			setPassword(value);
			validator(value);
		}
	};
	return { password, onChange };
};

const SignIn = props => {
	const [emailError, setEmailError] = useState("");
	const [pwError, setPWError] = useState("");
	let history = useHistory();

	const validateEmail = str => {
		let isError = false;
		let errorText = {};
		let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

		if (!regExp.test(str)) {
			isError = true;
			errorText.emailError = "이메일을 입력하세요";
		}
		if (isError) {
			setEmailError(errorText.emailError);
		}
		if (!isError) {
			setEmailError("");
		}
	};

	const validatePW = pw => {
		let isError = false;
		let errorText = {};
		let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/; //  6 ~ 10자 영문, 숫자 조합

		if (!regExp.test(pw)) {
			isError = true;
			errorText.pwLengthError = "영문, 숫자 조합으로 6~10자를 사용하세요";
		}
		if (isError) {
			setPWError(errorText.pwLengthError);
		}
		if (!isError) {
			setPWError("");
		}
	};

	const inputMail = useMail("", validateEmail);
	const inputPassword = usePassword("", validatePW);

	const loginHandler = () => {
		const { email } = inputMail;
		const { password } = inputPassword;
		const { setLogin } = props;
		console.log(email, password);
		axios
			.post("http://3.34.48.151:5000/user/signin", {
				email: email,
				password: password,
			})
			.then(res => {
				if (res.status === 200) {
					window.sessionStorage.setItem("user", JSON.stringify(res.data));
					setLogin();
				}
				if (props.isLogin === true) {
					history.push("/timer");
				} else {
					history.push("/");
				}
			})
			.catch(err => {
				if (err.response.status === 404) {
					alert("E-mail 또는 Password를 확인해주세요😢️");
				} else {
					alert("로그인에 실패하였습니다. 잠시 후 다시 시도해 주세요😢️");
				}
			});
	};

	return (
		<>
			{props.isLogin === false ? (
				<Background>
					<SLogo>
						<img src={logo} alt="logo" width="230" height="50" />
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
								onChange={inputMail.onChange}
								error={emailError === "" ? false : true}
								helperText={emailError}
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
								onChange={inputPassword.onChange}
								error={pwError === "" ? false : true}
								helperText={pwError}
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
									color: "rgba(30,30,30)",
									border: "1px solid",
									boxShadow: "0 3px 5px 2px rgba(30, 30, 30)",
								}}
								onClick={loginHandler}
								disabled={(emailError || pwError) === "" ? false : true}
								// emailError ,pwError
							>
								ENTER
							</Button>
							<Btn
								variant="outlined"
								onClick={() => history.push("/signup")}
								style={{
									borderRadius: 5,
									// backgroundColor: "#FFFFFF",
									border: "1px solid",
									color: "white",
									fontSize: "15px",
									boxShadow: "0 3 0px 2px rgba(30, 30, 30)",
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
};

const SLogo = styled.div`
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	/* border: 5px solid red; */
	margin-bottom: 100px;
	margin-top: 130px;
	size: 10px;
`;

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
	margin-top: 40px;
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

export default SignIn;
