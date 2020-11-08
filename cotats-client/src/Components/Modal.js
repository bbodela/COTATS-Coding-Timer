import React from "react";
import styled from "styled-components";

import { refresh } from "../refresh";
import { weeklyRefresh } from "../week";
import { monthlyRefresh } from "../month";

const Modal = props => {
	console.log(props);
	return (
		<Container>
			<Overlay onClick={props.open} />
			<Contents>
				<Title id="dialog-title">
					<span
						onClick={props.open}
						style={{ fontSize: "200%", margin: 10, cursor: "pointer" }}
					>
						{props.theme.mode === "dark" ? "❌️" : "✖️"}
					</span>
					<TodayDate>{`${
						new Date().getMonth() + 1
					}/ ${new Date().getDate()}`}</TodayDate>
				</Title>
				<Body>
					<li style={{ fontSize: "2rem" }}>🏅️</li>
					<li>
						<Btns onClick={refresh}>현재 랭킹(~ 어제)</Btns>
					</li>
					<li>
						<Btns onClick={weeklyRefresh}>WEEKLY</Btns>
					</li>
					<li>
						<Btns onClick={monthlyRefresh}>MONTHLY</Btns>
					</li>
				</Body>
				<div id="rankingtable"></div>
			</Contents>
		</Container>
	);
};
const Container = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: ${props =>
		props.theme.mode === "dark"
			? "rgba(0, 0, 0, 0.8)"
			: "rgba(225, 225, 225 , 0.8)"};
`;
const Contents = styled.div`
	overflow: auto;
	position: relative;
	top: 0px;
	padding: 0;
	border-radius: 10px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	background-color: ${props =>
		props.theme.mode === "dark"
			? "rgba(41, 41, 41, 0.95)"
			: "rgba(255, 255, 255 , 0.95)"};
	color: ${props => (props.theme.mode === "dark" ? "#f8f9fa" : "#212121")};
	text-align: center;
	width: 60%;
	height: 70%;
`;
const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${props => (props.theme.mode === "dark" ? "#f8f9fa" : "#212121")};
	width: 100%;
	height: 10%;
	border-bottom: 0.5px solid #f8f9fa;
`;
const TodayDate = styled.h2`
	font-size: 2rem;
	margin: 5px;
`;
const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	list-style: none;
	margin: 10px 10px 10px 10px;
`;
const Btns = styled.div`
	&:hover {
		text-decoration: underline;
		cursor: pointer;
		font-weight: bold;
	}
`;
export default Modal;
