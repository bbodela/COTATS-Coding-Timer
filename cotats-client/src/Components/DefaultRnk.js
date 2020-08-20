import React from "react";

const DefaultRnk = (props) => {
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
	// let myRanking = data.indexOf(
	// 	data.user_id === JSON.parse(window.sessionStorage.user).id
	// );
	// let myData = data.filter(
	// 	(mydata, index) =>
	// 		mydata.user_id === JSON.parse(window.sessionStorage.user).id
	// );
	// if (myData.length === 0) {
	// 	myData = [
	// 		{ savetime: 0, user: { username: "start를 눌러 시작해주세요!" } },
	// 	];
	// }
	// let hourData = Math.floor(myData[0].savetime / 3600);
	// let minData = Math.floor(
	// 	(myData[0].savetime - Math.floor(myData[0].savetime / 3600) * 3600) /
	// 		60
	// );
	// let secData = Number(
	// 	myData[0].savetime -
	// 		Math.floor(myData[0].savetime / 3600) * 3600 -
	// 		Math.floor(
	// 			(myData[0].savetime -
	// 				Math.floor(myData[0].savetime / 3600) * 3600) /
	// 				60
	// 		) *
	// 			60
	// );
	// ReactDOM.render(
	// 	<div>
	// 		<div>{`${new Date().getMonth() + 1}/${new Date().getDate()}`}</div>
	// 		<div className="mydata">
	// 			<div className="myranking">{myRanking}</div>
	// 			<div className="myname">{myData[0].user.username}</div>
	// 			<div className="mytime">
	// 				<span>{hourData >= 10 ? hourData : "0" + hourData}</span>
	// 				&nbsp;:&nbsp;
	// 				<span>{minData >= 10 ? minData : "0" + minData}</span>
	// 				&nbsp;:&nbsp;
	// 				<span>{secData >= 10 ? secData : "0" + secData}</span>
	// 			</div>
	// 			<div className="ranking">{myData[0].ranking}</div>
	// 		</div>
	// 		<div>
	// 			{data
	// 				.filter((rank, index) => index < 10)
	// 				.map((student, index) => {
	// 					let s_hourData = Math.floor(student.savetime / 3600);
	// 					let s_minData = Math.floor(
	// 						(student.savetime -
	// 							Math.floor(student.savetime / 3600) * 3600) /
	// 							60
	// 					);
	// 					let s_secData = Number(
	// 						student.savetime -
	// 							Math.floor(student.savetime / 3600) * 3600 -
	// 							Math.floor(
	// 								(student.savetime -
	// 									Math.floor(student.savetime / 3600) * 3600) /
	// 									60
	// 							) *
	// 								60
	// 					);
	// 					return (
	// 						<SList key={index}>
	// 							<>{index + 1}</>
	// 							<ListItem>
	// 								<ListItemText>{student.user.username}</ListItemText>
	// 								<ListItemText>
	// 									<span>
	// 										{s_hourData >= 10 ? s_hourData : "0" + s_hourData}
	// 									</span>
	// 									&nbsp;:&nbsp;
	// 									<span>
	// 										{s_minData >= 10 ? s_minData : "0" + s_minData}
	// 									</span>
	// 									&nbsp;:&nbsp;
	// 									<span>
	// 										{s_secData >= 10 ? s_secData : "0" + s_secData}
	// 									</span>
	// 								</ListItemText>
	// 							</ListItem>
	// 						</SList>
	// 					);
	// 				})}
	// 		</div>
	// 	</div>,
	// 	document.getElementById("rankingtable")
	// );
};

export default DefaultRnk;
