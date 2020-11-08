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
					<Logo>
						<img
							src={props.theme.mode === "dark" ? darkModeLogo : lightModeLogo}
							alt="logo"
						/>
					</Logo>
				</Container>
			) : (
				// 공부화면으로 갈 수 있는 버튼 링크
				<Container>
					<Logo>
						<Link to="/timer">
							<img
								src={props.theme.mode === "dark" ? darkModeLogo : lightModeLogo}
								alt="logo"
							/>
						</Link>
					</Logo>
				</Container>
			)}
		</>
	);
};

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Logo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Home;
