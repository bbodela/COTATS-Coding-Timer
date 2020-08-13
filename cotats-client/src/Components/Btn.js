import React from "react";
function Btn(props) {
	return (
		<div className="Btn">
			{props.status === 0 || props.status === 2 ? (
				<button className="start" onClick={props.start}>
					start
				</button>
			) : (
				""
			)}
			{props.status === 1 ? (
				<button className="stop" onClick={props.stop}>
					stop
				</button>
			) : (
				""
			)}
		</div>
	);
}
export default Btn;
