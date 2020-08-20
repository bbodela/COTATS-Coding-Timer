import React from "react";
import styled from "styled-components";

function DisplayTimer(props) {
	return (
		<SDisplay>
			<span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
			&nbsp;:&nbsp;
			<span>{props.time.m >= 10 ? props.time.m : "0" + props.time.m}</span>
			&nbsp;:&nbsp;
			<span>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</span>
			&nbsp;:&nbsp;
			<span>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</span>
		</SDisplay>
	);
}

const SDisplay = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: tranlate(-50%, -50%);
	color: #17d4fe;
	font-size: 80px;
	letter-spacing: 7px;
	font-weight: bold;
`;

export default DisplayTimer;
