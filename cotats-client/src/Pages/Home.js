import React from "react";
import styled from "styled-components";
import logo from "../img/cotats_w.png";

const Home = (props) => {
	return (
		<>
			{props.isLogin === false ? (
				<Container>
					<SLogo>
						<img src={logo} />
					</SLogo>
				</Container>
			) : (
				// 공부화면으로 갈 수 있는 버튼 링크
				<Container>
					<SLogo>
						<img src={logo} />
					</SLogo>
				</Container>
			)}
		</>
	);
};

const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	background-color: #212121;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	& * {
		box-sizing: border-box;
		font-family: "Source Sans Pro";
	}
`;

const SLogo = styled.div`
	text-align: center;
	margin: 200px 0 0 0;
`;

export default Home;
