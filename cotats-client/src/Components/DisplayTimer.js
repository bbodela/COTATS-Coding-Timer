import React from "react";
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
>>>>>>> 8b2786bfb083582c10cebd234a9ea15a5f7a5a92
}
export default DisplayTimer;
