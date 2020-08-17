import React from "react";
function Btn(props) {
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
>>>>>>> 8b2786bfb083582c10cebd234a9ea15a5f7a5a92
}
export default Btn;
