import React from "react";

const DefaultRnk = props => {
	const refreshtest = () => {
		let data = props.refresh();
		console.log(data);
		return data;
	};

	return (
		<div>
			<button onClick={() => refreshtest()}></button>
		</div>
	);
};

export default DefaultRnk;
