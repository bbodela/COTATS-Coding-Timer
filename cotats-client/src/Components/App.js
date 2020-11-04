import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
// import theme from "../theme";

import Home from "Pages/Home";
import SignIn from "Pages/SignIn";
import SignUp from "Pages/SignUp";
import Timer from "Pages/Timer";
import Header from "Components/Header";

const App = () => {
	const [status, setStatus] = useState(false);

	const login = () => {
		setStatus(true);
	};

	const logout = () => {
		window.sessionStorage.clear();
		setStatus(false);
	};

	useEffect(() => {
		if (window.sessionStorage.user) {
			login();
		} else {
			logout();
		}
	});

	return (
		<>
			<GlobalStyle />
			<Container className="App__container">
				<BrowserRouter>
					<Header isLogin={status} setLogin={login} setLogout={logout} />
					<Route exact path="/" render={() => <Home isLogin={status} />} />
					<Route
						path="/signin"
						render={() => <SignIn isLogin={status} setLogin={login} />}
					/>
					<Route path="/signup" render={() => <SignUp isLogin={status} />} />
					<Route path="/timer" render={() => <Timer isLogin={status} />} />
					<Redirect from="*" to="/timer" />
				</BrowserRouter>
			</Container>
		</>
	);
};

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
	color: white;
	& * {
		box-sizing: border-box;
		font-family: "Source Sans Pro";
	}
`;

export default App;
