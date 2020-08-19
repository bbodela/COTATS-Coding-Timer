import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<Background>
			<Items>
				<Icon>github repository icon</Icon>
				<Icon>team name</Icon>
			</Items>
		</Background>
	);
};
const Background = styled.div`
	display: block;
	position: fixed;
	bottom: 0px;
	height: 60px;
	width: 100%;
	background: wheat;
	padding: 1rem;
	text-align: center;
`;

const Items = styled.ul`
	justify-content: center;
	width: 100%;
	padding-left: 0;
`;

const Icon = styled.li`
	list-style: none;
`;

export default Footer;
