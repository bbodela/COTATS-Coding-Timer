import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { List } from "@material-ui/core";
import axios from "axios";
import logo from "../img/cotats_g_inner.png";
import Hamburger from "Components/Hamburger";

const Header = props => {
	const [menuStatus, setMenuStatus] = useState(false); //menustatus = false
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
	const open = () => {
		setMenuStatus(false);
	};
	const close = () => {
		// refresh();
		setMenuStatus(true);
	};

	return (
		<>
			{props.isLogin === false ? (
				<HeaderContainer>
					<MenuBtn>
						<Anchor to="/signin">
							<Stext>Sign In</Stext>
						</Anchor>
						<Anchor to="/signup">
							<Stext>JOIN</Stext>
						</Anchor>
					</MenuBtn>
					<button onClick={props.themeController}>Toggle Theme</button>
				</HeaderContainer>
			) : (
				<HeaderContainer>
					<BlinkingLogo>
						<Anchor to="/">
							<img src={logo} width="100" height="25" alt="logo" />
						</Anchor>
					</BlinkingLogo>
					<MenuBtn>
						<Anchor to="/" onClick={() => logoutHandler()}>
							<Stext>Sign Out</Stext>
						</Anchor>
						<Hamburger
							IsLogin={props.IsLogin}
							open={open}
							close={close}
							status={menuStatus}
						>
							test
						</Hamburger>
					</MenuBtn>
					<button onClick={props.themeController}>Toggle Theme</button>
				</HeaderContainer>
			)}
		</>
	);
};
const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 5px 10px;
	.logo {
		padding: 15px 0 10px 15px;
	}
	@media screen and (max-width: 600px) {
		flex-direction: column;
		align-content: flex-start;
		padding-top: 10px;
		padding-left: 0;
		padding-right: 0;
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
const Anchor = styled(Link)`
	text-decoration: none;
`;
const Stext = styled.a`
	color: whitesmoke;
	font-size: 20px;
	padding-top: 10px;
	padding: 15px;
	&:hover {
		font-size: 140%;
		color: lightslategrey;
	}
	&:link {
		color: white;
	}
	&:visited {
		color: white;
		text-decoration: none;
	}
`;
const MenuBtn = styled.div`
	display: flex;
	padding-left: 0;
	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`;
const RecordList = styled.ul`
	list-style: none;
`;

const SList = styled(List)`
	background-color: #212121;
`;
export default withRouter(Header);
