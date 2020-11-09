import React, { useState } from "react";
import styled from "styled-components";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { TextField } from "@material-ui/core";
import darkModeLogo from "../img/cotats_w_inner.png";
import lightModeLogo from "../img/cotats_b_outer2.png";

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
	const [isValid, setValid] = useState(false);
	let history = useHistory();

	const validateEmail = str => {
		let isError = false;
		let errorText = {};
		let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

		if (str !== "") {
			if (!regExp.test(str)) {
				isError = true;
				errorText.emailError = "이메일을 입력하세요";
			} else {
				isError = false;
			}
			if (isError) {
				setEmailError(errorText.emailError);
				setValid(false);
			}
			if (!isError) {
				setEmailError("");
				setInterval(() => validInputs(emailError, pwError), 1000);
			}
		}
	};

	const validatePW = pw => {
		let isError = false;
		let errorText = {};
		let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/; //  6 ~ 10자 영문, 숫자 조합
		if (pw !== "") {
			if (!regExp.test(pw)) {
				isError = true;
				errorText.pwLengthError = "영문, 숫자 조합으로 6~10자를 사용하세요";
			} else {
				isError = false;
			}
			if (isError) {
				setPWError(errorText.pwLengthError);
				setValid(false);
			}
			if (!isError) {
				setPWError("");
				setInterval(() => validInputs(emailError, pwError), 1000);
			}
		}
	};

	const validInputs = (e, p) => {
		if (p !== "" && e === "") {
			return setValid(false);
		}
		if (p === "" && e !== "") {
			return setValid(false);
		}
		if (e === "" && p === "") {
			return setValid(true);
		}
	};
	const inputMail = useMail("", validateEmail);
	const inputPassword = usePassword("", validatePW);

	const goHome = () => {
		history.push("/");
	};
	const loginHandler = () => {
		const { email } = inputMail;
		const { password } = inputPassword;
		const { setLogin } = props;

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
				<Container>
					<Title>
						👻️
						<br />
						Sign In to your account
					</Title>
					<Contents>
						<div>
							<img
								src={props.theme.mode === "dark" ? darkModeLogo : lightModeLogo}
								alt="logo"
								onClick={goHome}
								width="270"
								height="70"
							/>
						</div>
						<div>
							<div>
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
											style: { color: "#7a7a7a" },
										}}
										inputProps={{ style: { color: "#7a7a7a" } }}
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
										inputProps={{ style: { color: "#7a7a7a" } }}
									/>
								</div>
								<br />
								<div>
									<Buttons
										type="submit"
										onClick={loginHandler}
										disabled={isValid ? false : true}
									>
										ENTER
									</Buttons>
									<Buttons onClick={() => history.push("/signup")}>
										JOIN
									</Buttons>
								</div>
							</div>
						</div>
					</Contents>
				</Container>
			) : (
				<Container>
					<Contents>
						<h3>로그인되어 있습니다</h3>
						<Redirect to="/timer">
							<button>💻️코딩하러 갈까요?💻️</button>
						</Redirect>
					</Contents>
				</Container>
			)}
		</>
	);
};

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
`;
const Title = styled.p`
	margin: 0;
	padding: 40px 0 100px 0;
	text-align: center;
	font-size: 300%;
`;
const Contents = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const Buttons = styled.button`
	border-radius: 5px;
	padding: 4px 16px;
	margin: 10px;
	background-color: #f8f9fa;
	font-size: 15px;
	color: rgba(30, 30, 30);
	border: 1px solid;
	box-shadow: 0 2px 3px 1px rgba(30, 30, 30);
`;

export default SignIn;
