import React from "react";
import { Button } from "@material-ui/core";
function Btn(props) {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
	return (
		<div className="Btn">
			{props.status === 0 || props.status === 2 ? (
				<button className="start" onClick={props.start}>
					start
				</button>
=======
	return (
		<div className="Btn">
			{props.status === 0 || props.status === 2 ? (
				<Button
					variant="contained"
					color="primary"
					className="start"
					onClick={props.start}
				>
					start
				</Button>
>>>>>>> 3e159e694e0b96ca5c9e35c353525cbed5fd865a
			) : (
				""
			)}
			{props.status === 1 ? (
<<<<<<< HEAD
				<button className="stop" onClick={props.stop}>
					stop
				</button>
=======
				<Button
					variant="contained"
					color="secondary"
					className="stop"
					onClick={props.stop}
				>
					stop
				</Button>
>>>>>>> 3e159e694e0b96ca5c9e35c353525cbed5fd865a
			) : (
				""
			)}
		</div>
	);
<<<<<<< HEAD
>>>>>>> 8b2786bfb083582c10cebd234a9ea15a5f7a5a92
=======
>>>>>>> 3e159e694e0b96ca5c9e35c353525cbed5fd865a
}
export default Btn;
