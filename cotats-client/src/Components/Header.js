import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import logo from "../img/cotats_blue2.png";
import Hamburger from "Components/Hamburger";

function Header(props) {
	const [menuStatus, setMenuStatus] = useState(false);

	const open = () => {
		setMenuStatus(false);
	};
	const close = () => {
		setMenuStatus(true);
	};

	const logoutHandler = () => {
		axios
			.post("http://52.79.251.147:5000/user/signout")
			.then((res) => {
				console.log("헤더signout버튼클릭 시 res", res);
				props.logoutChangeHandler();
				props.history.push("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			{props.isLogin === false ? (
				<HeaderContainer>
					<MenuBtn>
						<Anchor to="/signin">
							<Stext>sign in</Stext>
						</Anchor>
						<Anchor to="/signup">
							<Stext>join</Stext>
						</Anchor>
					</MenuBtn>
				</HeaderContainer>
			) : (
				<HeaderContainer style={{ display: "flex" }}>
					<BlinkingLogo style={{ flex: 1 }}>
						<Anchor to="/">
							<img src={logo} width="100" height="22" alt="logo" />
						</Anchor>
					</BlinkingLogo>
					<MenuBtn style={{ flex: 1 }}>
						<Anchor to="/" onClick={() => logoutHandler()}>
							<Btn>
								<Stext>sign out</Stext>
							</Btn>
						</Anchor>
					</MenuBtn>
					<Hamburger
						open={open} // 열렸
						close={close} //  닫혓
						status={menuStatus} // 열+닫
						style={{ flex: 1 }}
					/>
				</HeaderContainer>
			)}
		</>
	);
}
const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
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
const BlinkingLogo = styled.span`
	animation: ${blink} 1s linear infinite;
	padding-top: 2px;
`;

const Btn = styled.span`
	flex: 1;
`;
const Anchor = styled(Link)`
	text-decoration: none;
`;
const Stext = styled.a`
	color: whitesmoke;
	font-size: 20px;
	padding-top: 10px;
	padding: 10px;
	align-content: center;
	&:hover {
		border-bottom: 1px solid #fff;
	}
`;

const MenuBtn = styled.div`
	display: flex;
	padding-left: 0;
	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`;

export default withRouter(Header);
