import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

// axios.defaults.withCredentials = true;

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	// inputChangeHandler = (val) => (e) => {
	// 	return console.log(e.target), console.log(val);
	// };

	loginHandler = () => {
		const { email, password } = this.state;

		axios
			.post("http://localhost:4000/signin", {
				email: email,
				password: password,
			})
			.then((res) => {
				console.log("로그인 서버응답", res);
				// this.props.history.push("/timer");
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
					<button type="submit" onClick={() => this.loginHandler()}>
						로그인
					</button>
					<button>회원가입</button>
				</div>
			</div>
		);
	}
}

export default SignIn;
