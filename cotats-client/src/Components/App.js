import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
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

	// componentDidMount = () => {
	// 	const { isLogin } = this.state;
	// 	axios
	// 		.post("http://localhost:4000/user/logincheck")
	// 		.then((res) => {
	// 			console.log("app.js 응답", res);

	// 			if (res.data.id) {
	// 				this.props.history.push("/timer");
	// 			} else {
	// 				this.props.history.push("/");
	// 			}
	// 		})
	// 		.catch((err) => console.log(err));
	// };

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
									if (isLogin) {
										return <Redirect to="/Timer" />;
									} else {
										return <Route path="/" component={Home} />;
									}
								}}
							/>
							<Route
								path="/user/signin"
								render={() => (
									<SignIn
										isLogin={isLogin}
										loginChangeHandler={() => this.loginChangeHandler()}
										// handleLogoutChange={() => this.handleLogoutChange()}
									/>
								)}
							/>
							<Route
								path="/user/signup"
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
							<Footer />
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
		
	}
`;

const Container = styled.div`
	height: 100vh;
	width: 100%;
	background-color: #f5f6fa;
	& * {
		box-sizing: border-box;
	}
`;

export default App;
