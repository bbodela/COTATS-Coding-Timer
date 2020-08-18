import React from "react";
import styled from "styled-components";

const Footer = () => {
	return <Background>FooterFooterFooterFooterFooter</Background>;
};
const Background = styled.div`
	display: grid;
	place-items: center;
	grid-column: 1 / 4;
	background: wheat;
	padding: 2rem;
	text-align: center;
`;

export default Footer;
