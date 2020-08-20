import React from "react";
import styled from "styled-components";
import logo from "../img/cotats_w_inner.png";

import { Link } from "react-router-dom";

const Home = (props) => {
	return (
		<>
			{props.isLogin === false ? (
				<Container>
					<SLogo>
						<img src={logo} alt="logo" />
					</SLogo>
				</Container>
			) : (
				// 공부화면으로 갈 수 있는 버튼 링크
				<Container>
					<LogoLink to="/timer">
						<img src={logo} alt="logo" />
					</LogoLink>
					{/* <TimerButton>공부화면</TimerButton> */}
				</Container>
			)}
		</>
	);
};

const Container = styled.div`
	max-height: 100vh;
	background-color: #212121;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	margin: 0;
	& * {
		font-family: "Source Sans Pro";
	}
`;

const SLogo = styled.div`
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LogoLink = styled(Link)`
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

// const TimerButton = styled.button``;

export default Home;
