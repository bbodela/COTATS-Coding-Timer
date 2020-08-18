import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<Container>
			<h1>홈 화면 입니다</h1>
		</Container>
	);
};

const Container = styled.div`
	height: 74%;
	width: 100%;
	background: lightpink;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	& * {
		box-sizing: border-box;
	}
`;

export default Home;
