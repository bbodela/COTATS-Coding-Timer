import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import logo from "../img/cotats_g_inner.png";
import hamburger_w from "../img/hamburger_w.png";
import hamburger_b from "../img/hamburger_b.png";

const Header = props => {
	const logoutHandler = () => {
		axios
			.post("http://3.34.48.151:5000/user/signout")
			.then(res => {
				console.log("헤더signout버튼클릭 시 res", res);
				props.setLogout();
				props.history.push("/");
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<>
			{props.isLogin === false ? (
				<Container>
					<NaviLinks>
						<Sign_ to="/signin">Sign in</Sign_>
						<Sign_ to="/signup">Join</Sign_>
					</NaviLinks>
					<ToggleBtn onClick={props.themeController}>
						{props.theme.mode === "dark" ? "Light" : "Dark"} mode
					</ToggleBtn>
				</Container>
			) : (
				<MemberContainer>
					<MemberNavi>
						<Link to="/">
							<BlinkingLogo>
								<img src={logo} width="80" height="16" alt="logo" />
							</BlinkingLogo>
						</Link>
						<div>
							<MemberNaviLinks>
								<Sign_ to="/" onClick={logoutHandler}>
									Sign Out
								</Sign_>

								<ToggleBtn onClick={props.themeController}>
									{props.theme.mode === "dark" ? "Light" : "Dark"} mode
								</ToggleBtn>
							</MemberNaviLinks>
						</div>
					</MemberNavi>
					<div>
						<img
							src={props.theme.mode === "dark" ? hamburger_w : hamburger_b}
							alt="logo"
							onClick={props.close}
							width="30"
							height="23"
							style={{ cursor: "pointer" }}
						/>
					</div>
				</MemberContainer>
			)}
		</>
	);
};

const Container = styled.section`
	width: 100%;
	height: 25px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 8px 16px;

	@media screen and (max-width: 414px) {
		height: 45px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 8px 16px;
	}
`;
const NaviLinks = styled.div`
	align-items: center;
`;
const MemberContainer = styled.section`
	width: 100%;
	height: 25px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 8px 16px;

	@media screen and (max-width: 414px) {
		height: 45px;
		display: flex;
		padding: 8px 16px;
		justify-content: space-between;
		align-items: center;
	}
`;

const MemberNavi = styled.div`
	display: flex;
	@media screen and (max-width: 414px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
const MemberNaviLinks = styled.div`
	display: flex;

	@media screen and (max-width: 414px) {
		align-content: center;
		display: flex;
		flex-direction: row;
		padding: 0px 10px;
	}
`;
const blink = keyframes`
			50% {
				opacity: 0;
			}
		`;
const BlinkingLogo = styled.div`
	animation: ${blink} 1s linear infinite;
	text-decoration: none;
`;
const Sign_ = styled(Link)`
	padding: 0px 10px;
	text-decoration: none;

	&:link,
	&:visited {
		color: ${props => (props.theme.mode === "dark" ? "#7a7a7a" : "#696969")};
	}
	&:hover {
		color: ${props => (props.theme.mode === "dark" ? "#f8f9fa" : "#212121")};
	}
	&:active {
		color: #99ff00;
	}
`;
const ToggleBtn = styled.div`
	padding: 0 16px;
	border-radius: 5px;
	box-shadow: 2px 2px 2px #dadada;

	&:active {
		transform: translateY(4px);
	}
`;

export default withRouter(Header);
