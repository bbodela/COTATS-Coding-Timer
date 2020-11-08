import React from "react";
import styled from "styled-components";

const Btn = props => {
	return (
		<div className="Btn">
			{props.status === 0 || props.status === 2 ? (
				<Buttons className="start" onClick={props.start}>
					<b>START</b>
				</Buttons>
			) : (
				""
			)}
			{props.status === 1 ? (
				<>
					<Buttons className="start" onClick={props.pause}>
						<b>PAUSE</b>
					</Buttons>
					<Buttons className="start" onClick={props.stop}>
						<b>STOP</b>
					</Buttons>
				</>
			) : (
				""
			)}
		</div>
	);
};

export default Btn;

const Buttons = styled.button`
	width: 150px;
	height: 50px;
	border-radius: 10px;
	color: #7a7a7a;
	font-weight: bolder;
	font-size: 20px;
	margin-left: 30px;
	&:active {
		transform: translateY(4px);
	}
`;
