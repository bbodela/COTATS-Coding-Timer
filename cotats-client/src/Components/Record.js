import React from "react";
const Record = (props) => {
	return (
		<div>
			<div className="hamburgerMenuSide">
				<button className="closeBtn" onClick={props.open}>
					close
				</button>
				<button className="refresh">*</button>
				<div className="mydata">
					{/* <div>랭킹</div> */}
					<div className="yesterday">{props.fakedata[0].day}</div>
					<div className="mytime">{props.fakedata[0].time}</div>
					<div className="ranking">{props.fakedata[0].id}</div>
				</div>
				<div>
					{props.fakedata.map((data) => {
						return (
							<ul key={data.id}>
								<li>{data.id}</li>
								<li>{data.username}</li>
								<li>{data.time}</li>
							</ul>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default Record;
