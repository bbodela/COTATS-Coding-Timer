import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Home from "Pages/Home";
import SignIn from "Pages/SignIn";
import SignUp from "Pages/SignUp";
import Timer from "Pages/Timer";
import Header from "Components/Header";
import Footer from "Components/Footer";

const GlobalStyle = createGlobalStyle`
  body {
		@font-face {
			font-family: 'GmarketSansMedium';
			src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
			font-weight: normal;
			font-style: normal;
		}

		background-color: ${props =>
			props.theme.mode === "dark" ? "#212121" : "#f8f9fa"};
		color: ${props => (props.theme.mode === "dark" ? "#f8f9fa" : "#212121")};

		font-family: "GmarketSansMedium";
		font-size: 12px;

		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		margin: 0;
		
		box-sizing: border-box;
	}
`;

const getInitialTheme = () => {
	const initialTheme = window.localStorage.getItem("theme");
	return initialTheme ? JSON.parse(initialTheme) : { mode: "dark" };
};

const App = () => {
	const [status, setStatus] = useState(false);
	const [theme, setTheme] = useState(getInitialTheme);
	const [menuStatus, setMenuStatus] = useState(false);

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

	const open = () => {
		setMenuStatus(false);
	};
	const close = () => {
		setMenuStatus(true);
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
				<div>
					<BrowserRouter>
						<Header
							isLogin={status}
							setLogin={login}
							setLogout={logout}
							themeController={themeController}
							theme={theme}
							open={open}
							close={close}
							status={menuStatus}
						/>
						<Route
							exact
							path="/"
							render={() => <Home isLogin={status} theme={theme} />}
						/>
						<Route
							path="/signin"
							render={() => (
								<SignIn theme={theme} isLogin={status} setLogin={login} />
							)}
						/>
						<Route
							path="/signup"
							render={() => <SignUp theme={theme} isLogin={status} />}
						/>
						<Route
							path="/timer"
							render={() => (
								<Timer
									isLogin={status}
									open={open}
									close={close}
									status={menuStatus}
									theme={theme}
								/>
							)}
						/>
						<Footer theme={theme} />
						<Redirect from="*" to="/timer" />
					</BrowserRouter>
				</div>
			</>
		</ThemeProvider>
	);
};

export default App;
