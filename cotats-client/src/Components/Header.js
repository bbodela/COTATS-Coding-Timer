import React from "react";
import styled, { keyframes } from "styled-components";
import { darken, lighten } from "polished";
import { Link, withRouter, Route } from "react-router-dom";
import axios from "axios";
import logo from "../img/cotats_g.png";

const Header = (props) => {
	console.log("헤더props", props);
	const logoutHandler = () => {
		axios
			.post("http://3.18.213.157:5000/user/signout")
			.then((res) => {
				console.log("헤더signout버튼클릭 시 res", res);
				// 서버에서 세션파괴해주면 isLogin을 !isLogin으로 바꾸고
				props.loginChangeHandler();
				props.history.push("/");
				// 서버에 최종 시간 다시한번 저장해야할까요.??????
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const loginBtnHandler = () => {
		props.history.push("/signin");
	};

	const joinBtnHandler = () => {
		props.history.push("/signup");
	};

	return (
		<>
			{props.isLogin === false ? (
				<HeaderContainer>
					<MenuBtn>
						<Button onClick={() => loginBtnHandler()}>로그인</Button>
						<Button onClick={() => joinBtnHandler()}>회원가입</Button>
					</MenuBtn>
				</HeaderContainer>
			) : (
				<HeaderContainer>
					<BlinkingLogo>
						<Anchor to="/">
							<img src={logo} width="100" height="25" alt="logo" />
						</Anchor>
					</BlinkingLogo>
					<MenuBtn>
						<Button onClick={() => logoutHandler()}>로그아웃</Button>
					</MenuBtn>
				</HeaderContainer>
			)}
		</>
	);
};

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #eeeeee;
	padding: 5px 10px;

	.logo {
		padding: 15px 0 10px 15px;
	}

	@media screen and (max-width: 600px) {
		flex-direction: column;
		align-items: flex-start;

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

const Button = styled.button`
	cursor: pointer;
	outline: none;
	border: none;
	border-radius: 4px;
	padding: 10px 18px 10px 18px;
	margin: 15px 10px 15px 10px;
	background: #eeeeee;
	&:hover {
		background: ${lighten(0.2, "#cfd8dc")};
	}

	@media screen and (max-width: 600px) {
		padding: 3px 5px 3px 5px;
		margin: 5px 0px 10px 15px;
	}
`;

const MenuBtn = styled.div`
	display: flex;
	padding-left: 0;
	justify-content: right;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		justify-content: right;
	}
`;

export default withRouter(Header);
