import React, { Component } from "react";
import styled from "styled-components";

/* : 회원가입 버튼을 누르면
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

	inputChangeHandler = (input) => (e) => {
		// return this.setState({
		// })
	};

	render() {
		const { email, password, username } = this.state;
		return (
			<div>
				<h1>회원가입</h1>
				<div>
					<input
						type="text"
						placeholder="Nickname"
						// onChange={this.inputChangeHandler("email")}
					/>
				</div>
				<div>
					<input
						type="email"
						placeholder="Email"
						// onChange={this.inputChangeHandler("email")}
					/>
				</div>
				<div>
					<input
						type="password"
						placeholder="Password"
						// onChange={this.inputChangeHandler("password")}
					/>
				</div>
				<div>
					<input
						type="password"
						placeholder="Confirm Password"
						// onChange={this.inputChangeHandler("password")}
					/>
				</div>
				<div>
					<button>회원가입</button>
				</div>
			</div>
		);
	}
}

export default SignUp;
