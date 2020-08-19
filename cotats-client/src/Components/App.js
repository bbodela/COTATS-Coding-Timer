import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import axios from "axios";
import theme from "../theme";

import Home from "Pages/Home";
import SignIn from "Pages/SignIn";
import SignUp from "Pages/SignUp";
import Timer from "Pages/Timer";
import Header from "Components/Header";
import Footer from "Components/Footer";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLogin: false,
		};
	}

	// handle login state
	loginChangeHandler = () => {
		const { isLogin } = this.state;
		this.setState({
			isLogin: !isLogin,
		});
	};

	// check to see >> cookie's installed
	// asking the API >> isAuthenticated or not
	checkLoginStatus = () => {
		axios
			// .get("http://3.18.213.157:5000/logincheck", { withCredentials: false })
			.get("http://localhost:4000/logincheck", { withCredentials: false })
			.then((res) => {
				console.log("loginchecckckck", res.headers.get("set-cookie"));
				console.log("cokkkkkkie", document.cookie);
				// if (res.data.logged_in && this.state.isLogin === false) {
				// 	this.setState({ isLogin: true });
				// } else if (!res.data.logged_in && this.state.isLogin === true) {
				// 	this.setState({ isLogin: false });
				// }
			})
			.catch((err) => console.log("check login error", err));
	};

	componentDidMount = () => {
		this.checkLoginStatus();
		// api요청으로 로그인 된 상태를 렌더
		// 	const { isLogin } = this.state;
		// 	// 로그인 된 상태이면 로그인 풀고
		// 	// 로그아웃된 상태이면 로그인 시킨?
		// 	if (!isLogin) {
		// 		this.loginChangeHandler();
		// 	}
	};

	render() {
		const { isLogin } = this.state;
		return (
			<Fragment>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Container>
						<BrowserRouter>
							<Header
								isLogin={isLogin}
								loginChangeHandler={() => this.loginChangeHandler()}
							/>
							<Route
								exact
								path="/"
								render={() => {
									return (
										<Route path="/">
											<Home isLogin={isLogin} />
										</Route>
									);
								}}
							/>
							<Route
								path="/signin"
								render={() => (
									<SignIn
										isLogin={isLogin}
										loginChangeHandler={() => this.loginChangeHandler()}
										// handleLogoutChange={() => this.handleLogoutChange()}
									/>
								)}
							/>
							<Route
								path="/signup"
								render={() => <SignUp isLogin={isLogin} />}
							/>
							<Route
								path="/timer"
								render={() => (
									<Timer
										isLogin={isLogin}
										// loginChangeHandler={() => this.loginChangeHandler()}
									/>
								)}
							/>
							<Redirect from="*" to="/" />
							{/* <Footer /> */}
						</BrowserRouter>
					</Container>
				</ThemeProvider>
			</Fragment>
		);
	}
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
		height: 100%;
	width: 100%;
	}
`;

const Container = styled.div`
	background-color: #212121;
	& * {
		box-sizing: border-box;
		font-family: "Source Sans Pro";
	}
`;

export default App;
