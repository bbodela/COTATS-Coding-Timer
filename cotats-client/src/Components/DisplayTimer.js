import React from "react";
import styled, { keyframes } from "styled-components";
function DisplayTimer(props) {
	return (
		<b className="DisplayTimer">
			<Timenumber>
				{props.time.h >= 10 ? props.time.h : "0" + props.time.h}
				<Blinktime>&nbsp;:&nbsp;</Blinktime>
			</Timenumber>
			<Timenumber>
				{props.time.m >= 10 ? props.time.m : "0" + props.time.m}
				<Blinktime>&nbsp;:&nbsp;</Blinktime>
			</Timenumber>
			<Timenumber>
				{props.time.s >= 10 ? props.time.s : "0" + props.time.s}
			</Timenumber>
			<Ms>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</Ms>
		</b>
	);
}

const Timenumber = styled.span`
	top: 60%;
	color: white;
	font-size: 150px;
	top: 50%;
	font-family: "Nanum Gothic", sans-serif !important;
	cursor: default;
	font-size: 1050%;
	letter-spacing: -5px;
	text-shadow: 0 4px 6px whitesmoke, 0 1px 3px whitesmoke;
`;
const Ms = styled.span`
	color: white;
	font-family: "Nanum Gothic", sans-serif !important;
	font-weight: bolder;
`;

const blink = keyframes`
    50% {
      opacity: 0;
    }
	`;

const Blinktime = styled.span`
	animation: ${blink} 1s linear infinite;
	text-decoration: none;
`;

export default DisplayTimer;
