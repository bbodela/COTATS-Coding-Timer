import React, { useState } from "react";
import styled from "styled-components";
import { Redirect, useHistory } from "react-router-dom";
import { Typography, TextField, Button } from "@material-ui/core";
import axios from "axios";
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

const useName = (inputValue, validator) => {
	const [name, setName] = useState(inputValue);
	const onChange = e => {
		const {
			target: { value },
		} = e;

		if (typeof validator === "function") {
			setName(value);
			validator(value);
		}
	};
	return { name, onChange };
};

const useCheckPW = (inputValue, validator) => {
	const [checkPW, setCheckPW] = useState(inputValue);
	const onChange = e => {
		const {
			target: { value },
		} = e;

		if (typeof validator === "function") {
			setCheckPW(value);
			validator(value);
		}
	};
	return { checkPW, onChange };
};

const SignUp = props => {
	let history = useHistory();
	const [emailError, setEmailError] = useState("");
	const [pwError, setPWError] = useState("");
	const [nameError, setNameError] = useState("");
	const [checkError, setCheckError] = useState("");

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
	const inputMail = useMail("", validateEmail);

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
	const inputPassword = usePassword("", validatePW);

	const validateName = name => {
		let isError = false;
		let errorText = {};
		if (name.length < 2) {
			isError = true;
			errorText.nameError = "이름은 최소 2자 이상이어야 합니다";
		}
		if (isError) {
			setNameError(errorText.nameError);
		}
		if (!isError) {
			setNameError("");
		}
	};
	const inputName = useName("", validateName);

	const validateCheckPW = pw => {
		let isError = false;
		let errorText = {};

		if (password !== pw) {
			isError = true;
			errorText.pwCheckError = "비밀번호가 일치하지 않습니다";
		}
		if (isError) {
			setCheckError(errorText.pwCheckError);
		}
		if (!isError) {
			setCheckError("");
		}
	};
	const inputCheckPW = useCheckPW("", validateCheckPW);

	const { name } = inputName;
	const { email } = inputMail;
	const { password } = inputPassword;

	const joinHandler = () => {
		console.log("입력값들>>>", name, email, password);

		axios
			.post("http://3.34.48.151:5000/user/signup", {
				username: name,
				email: email,
				password: password,
			})
			.then(res => {
				if (res.status === 200) {
					history.push("/signin");
				}
			})
			.catch(err => {
				if (err.response.status === 409) {
					alert("이미 가입된 사용자입니다🤯️");
				} else {
					alert("회원가입에 실패하였습니다. 잠시 후 다시 시도해 주세요😢️");
				}
			});
	};

	return (
		<>
			{props.isLogin === false ? (
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
								onKeyUp={inputName.onChange}
								error={nameError === "" ? false : true}
								helperText={nameError}
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
						<div>
							<TextField
								name="password"
								type="password"
								label="Confirm Password"
								onChange={inputCheckPW.onChange}
								error={checkError === "" ? false : true}
								helperText={checkError}
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
								disabled={
									(emailError || pwError || nameError || checkError) === ""
										? false
										: true
								}
								onClick={joinHandler}
							>
								<b style={{ color: "rgba(30, 30, 30)", fontWeight: "bold" }}>
									join!
								</b>
							</Button>
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

export default SignUp;
