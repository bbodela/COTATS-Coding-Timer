import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const DisplayTimer = props => {
	return (
		<TimeContainer>
			<TimeSection className="DisplayTimer">
				<TimeNum>
					{props.time.h >= 10 ? props.time.h : "0" + props.time.h}
					<Blinktime>&nbsp;:&nbsp;</Blinktime>
				</TimeNum>
				<TimeNum>
					{props.time.m >= 10 ? props.time.m : "0" + props.time.m}
					<Blinktime>&nbsp;:&nbsp;</Blinktime>
				</TimeNum>
				<TimeNum>
					{props.time.s >= 10 ? props.time.s : "0" + props.time.s}
				</TimeNum>
				<Blinktime>&nbsp;:&nbsp;</Blinktime>
				<MilliSec>
					{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}
				</MilliSec>
			</TimeSection>
		</TimeContainer>
	);
};
export default DisplayTimer;

const TimeContainer = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1000%;
`;

const TimeSection = styled.div`
	/* font-size: 400%; */
	letter-spacing: -5px;
`;

const TimeNum = styled.span`
	font-weight: bolder;
`;

const MilliSec = styled.span`
	font-size: 40%;
	font-weight: normal;
`;
const blink = keyframes`
    50% {
      opacity: 0;
    }
	`;
const Blinktime = styled.span`
	animation: ${blink} 1s linear infinite;
`;
