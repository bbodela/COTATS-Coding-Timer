import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { darken, lighten } from "polished";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
// import logo from "./logo-test.png";

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

	return (
		<>
			{props.isLogin === false ? (
				<div>
					<HeaderContainer>
						<div className="logo">
							<BlinkingLogo>
								<Anchor to="/">
									{/* <img src={logo} /> */}
									logo자리
								</Anchor>
							</BlinkingLogo>
						</div>
						<div>
							<Anchor to="/user/signin">
								<Button>로그인</Button>
							</Anchor>
							<Anchor to="/user/signup">
								<Button>회원가입</Button>
							</Anchor>
						</div>
					</HeaderContainer>
				</div>
			) : (
				<HeaderContainer>
					<div className="logo">
						<BlinkingLogo>
							<Anchor to="/">
								{/* <img src={logo} /> */}
								logo자리
							</Anchor>
						</BlinkingLogo>
					</div>
					<div>
						{/* 이부분 라우팅 다시봐야함 */}
						<Button onClick={logoutHandler}>로그아웃</Button>
					</div>
				</HeaderContainer>
			)}
		</>
	);
};

const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	height: 70px;
	border-bottom: 2px solid #f1f1f1;
	padding: 0 20px;
	justify-content: space-between;
	.logo {
		padding: 15px 0 0 20px;
	}
`;

const blink = keyframes`
  50% {
		opacity: 0;
	}
`;

const BlinkingLogo = styled.div`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background-color: #ff3;
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
	display: inline-flex;
	border-radius: 4px;
	padding: 10px 18px 10px 18px;
	margin: 15px 10px 15px 10px;

	/* 색상 */
	background: #ffcc99;
	&:hover {
		background: ${darken(0.2, "#FFCD64")};
	}
	&:active {
		background: ${lighten("0.2", "rgba(255,205,100,0.7)")};
	}
`;

export default withRouter(Header);
