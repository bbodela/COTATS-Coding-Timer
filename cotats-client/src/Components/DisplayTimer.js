import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
function DisplayTimer(props) {
  return (
    <div className="DisplayTimer">
      <span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
      &nbsp;:&nbsp;
      <span>{props.time.m >= 10 ? props.time.m : "0" + props.time.m}</span>
      &nbsp;:&nbsp;
      <span>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</span>
      &nbsp;:&nbsp;
      <span>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</span>
    </div>
  );
=======

function DisplayTimer(props) {
=======

function DisplayTimer(props) {
>>>>>>> 3e159e694e0b96ca5c9e35c353525cbed5fd865a
	return (
		<div className="DisplayTimer">
			<span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
			&nbsp;:&nbsp;
			<span>{props.time.m >= 10 ? props.time.m : "0" + props.time.m}</span>
			&nbsp;:&nbsp;
			<span>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</span>
			&nbsp;:&nbsp;
			<span>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</span>
		</div>
	);
<<<<<<< HEAD
>>>>>>> 8b2786bfb083582c10cebd234a9ea15a5f7a5a92
=======
>>>>>>> 3e159e694e0b96ca5c9e35c353525cbed5fd865a
}
export default DisplayTimer;
