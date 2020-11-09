import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import github from "../img/githubIcon.svg";
import github_w from "../img/github_w.png";
import link_w from "../img/link_w.png";
import link_b from "../img/link_b.png";

const Container = styled.div`
	display: flex;
	height: 70px;
	bottom: 0;
	border-top: 0.5px solid #dee2e6;
	align-items: center;
	justify-content: space-between;
`;
const Description = styled.div`
	display: flex;
	margin: 0 20px;
	align-items: center;
`;
const Name = styled.p`
	margin: 10px;
	font-size: 26px;
	text-align: center;
	cursor: pointer;
	&:hover {
		opacity: 70%;
	}
`;
const Logos = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 20px;
`;
const Logo = styled.span`
	margin: 0 10px;
	cursor: pointer;
	&:hover {
		opacity: 70%;
	}
`;

const Footer = props => {
	let history = useHistory();
	const onClickGithub = () => {
		window.open("https://github.com/bbodela/COTATS-Coding-Timer");
	};
	const onClickLink = () => {
		window.open("https://d3dmm6z4idulob.cloudfront.net");
	};
	const onClickCotats = () => {
		history.push("/");
	};

	return (
		<Container>
			<Description>
				<Name onClick={onClickCotats}>코타츠</Name>
				<p style={{ margin: 10, textAlign: "center" }}>
					ⓒ <span style={{ fontWeight: "bold" }}>코타츠</span>의 모든 권한은{" "}
					<span style={{ fontWeight: "bold" }}>쌉파서블</span>에게 있습니다.
				</p>
			</Description>
			<Logos>
				<Logo>
					<img
						onClick={onClickGithub}
						src={props.theme.mode === "dark" ? github_w : github}
						width="30"
						height="30"
					/>
				</Logo>
				<Logo>
					<img
						onClick={onClickLink}
						src={props.theme.mode === "dark" ? link_w : link_b}
						width="30"
						height="30"
					/>
				</Logo>
			</Logos>
		</Container>
	);
};

export default Footer;
