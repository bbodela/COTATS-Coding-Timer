import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
// import theme from "../theme";

import Home from "Pages/Home";
import SignIn from "Pages/SignIn";
import SignUp from "Pages/SignUp";
import Timer from "Pages/Timer";
import Header from "Components/Header";

const getInitialTheme = () => {
	const initialTheme = window.localStorage.getItem("theme");
	return initialTheme ? JSON.parse(initialTheme) : { mode: "dark" };
};

const App = () => {
	const [status, setStatus] = useState(false);
	const [theme, setTheme] = useState(getInitialTheme);

	const login = () => {
		setStatus(true);
	};

	const logout = () => {
		window.sessionStorage.clear();
		setStatus(false);
	};

	const themeController = e => {
		setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" });
	};

	useEffect(() => {
		window.localStorage.setItem("theme", JSON.stringify(theme));
		if (window.sessionStorage.user) {
			login();
		} else {
			logout();
		}
	}, [theme]);

	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />
				<Container className="App__container">
					<BrowserRouter>
						<Header
							isLogin={status}
							setLogin={login}
							setLogout={logout}
							themeController={themeController}
						/>
						<Route
							exact
							path="/"
							render={() => <Home isLogin={status} theme={theme} />}
						/>
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
		</ThemeProvider>
	);
};

const GlobalStyle = createGlobalStyle`
  body {
		background-color: ${props =>
			props.theme.mode === "dark" ? "#212121" : "#EEE"};
		color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#212121")};
		
    margin: 0;
    padding: 0;
		height: 100%;
		width: 100%;
	}
`;

const Container = styled.div`
	/* background-color: #212121;
	color: white; */
	& * {
		box-sizing: border-box;
		font-family: "Source Sans Pro";
	}
`;

export default App;
