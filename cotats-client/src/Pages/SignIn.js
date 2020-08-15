import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	inputChangeHandler = (val) => (e) => {
		this.setState({ [val]: e.target.value });
	};

	// 유효성 검사부분 필요!
	// @입력안하면 @포함하라고하는기능, 비밀번호는 6자 이상 ,
	// 무조건 입력을해야 버튼이 눌러지도록>> 입력값이없으면 서버요청응답이에러니까 어차피안됨
	loginHandler = () => {
		const { email, password } = this.state;

		axios
			.post("http://localhost:4000/signin", {
				email: email,
				password: password,
			})
			.then((res) => {
				console.log("로그인 서버응답", res);
				this.props.history.push("/timer");
				// 로그인요청 응답: 해당 유저의 모든 데이터
				// 로그인성공 시 timer로 redirect
				// 로그아웃은 timer화면으로 갔을 때 Header에 나오게 하면 좋을것같습니다
			})
			.catch((err) => console.log(err));
	};

	render() {
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
					<button type="submit" onClick={() => this.loginHandler()}>
						공부하러 가기
					</button>
					<button onClick={() => this.props.history.push("/signup")}>
						회원가입
					</button>
				</div>
			</div>
		);
	}
}

export default SignIn;
