import React from "react";
import styled from "styled-components";
import darkModeLogo from "../img/cotats_w_inner.png";
import lightModeLogo from "../img/cotats_b_outer2.png";

import { Link } from "react-router-dom";

const Home = props => {
	return (
		<>
			{props.isLogin === false ? (
				<Container>
					<SLogo>
						<img
							src={props.theme.mode === "dark" ? darkModeLogo : lightModeLogo}
							alt="logo"
						/>
					</SLogo>
				</Container>
			) : (
				// 공부화면으로 갈 수 있는 버튼 링크
				<Container>
					<LogoLink to="/timer">
						<img
							src={props.theme.mode === "dark" ? darkModeLogo : lightModeLogo}
							alt="logo"
						/>
					</LogoLink>
				</Container>
			)}
		</>
	);
};

const Container = styled.div`
	height: 100vh;
	/* background-color: #212121; */
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
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
`;

export default Home;
