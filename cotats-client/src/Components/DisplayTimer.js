import React from "react";
<<<<<<< HEAD
import styled, { createGlobalStyle } from "styled-components";
function DisplayTimer(props) {
  return (
    <b className="DisplayTimer">
      <Timenumber>
        {props.time.h >= 10 ? props.time.h : "0" + props.time.h}
        &nbsp;:&nbsp;
      </Timenumber>
      <Timenumber>
        {props.time.m >= 10 ? props.time.m : "0" + props.time.m}
        &nbsp;:&nbsp;
      </Timenumber>
      <Timenumber>
        {props.time.s >= 10 ? props.time.s : "0" + props.time.s}
      </Timenumber>
      &nbsp;:&nbsp;
      <Ms>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</Ms>
    </b>
  );
=======
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
>>>>>>> 13f1ddf2d3f4eadc13401b89133797a170c856cf
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

const Timenumber = styled.span`
  top: 60%;
  color: white;
  font-size: 150px;
  top: 50%;
  font-family: "Nanum Gothic", sans-serif !important;
  cursor: default;
  font-size: 1050%;
  letter-spacing: -5px;
`;

const Ms = styled.span`
  color: white;
  font-family: "Nanum Gothic", sans-serif !important;
  font-weight: bolder;
`;

const GlobalStyles = createGlobalStyle`
      body {
        @import url("https://fonts.googleapis.com/css");
        font-family: "Nanum Gothic", sans-serif !important;
      }
    `;
