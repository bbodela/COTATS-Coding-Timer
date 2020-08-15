import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

axios.defaults.withCredentials = true;

/*  회원가입 버튼을 누르면
	1. post요청성공시
		 1-1. 회원가입완료되었다고 알려주고
		 	로그인페이지로 redirect || 로그인하러가시겠습니까?
	2. 회원가입실패하는경우
		2-1. 이미 존재하는 유저면 이미 존재한다고 알려주기
		2-2. 
 */

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			username: "",
		};
	}
	inputChangeHandler = (val) => (e) => {
		this.setState({ [val]: e.target.value });
	};

	joinHandler = () => {
		const { email, password, username } = this.state;

		axios
			.post("http://localhost:4000/signup", {
				email: email,
				password: password,
				username: username,
			})
			.then((res) => {
				console.log("로그인 서버응답", res, this.props);
				// console.log("로그인 서버응답", res.data);
				// 가입성공하면 '가입에 성공했다!`라고 뭐라고띄우지

				// 응답: 해당 유저의 id나 그냥 성공했다는 메시지만날려줘도 될듯
				this.props.history.push("/signin");
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<h1>회원가입</h1>
				<div>
					<input
						type="text"
						placeholder="Nickname"
						onChange={this.inputChangeHandler("username")}
					/>
				</div>
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
					<input
						type="password"
						placeholder="Confirm Password"
						onChange={this.inputChangeHandler("password")}
					/>
				</div>
				<div>
					<button type="submit" onClick={() => this.joinHandler()}>
						회원가입
					</button>
				</div>
			</div>
		);
	}
}
export default SignUp;
