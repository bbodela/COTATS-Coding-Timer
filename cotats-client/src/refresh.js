import axios from "axios";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { List, ListItemText } from "@material-ui/core";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const refresh = () => {
	axios
		.get("http://3.34.48.151:5000/time/timerank", {
			params: { test: "gettest" },
		})
		.then(res => {
			let data = res.data;
			const findMyRanking = data => {
				for (let i = 0; i < data.length; i++) {
					if (JSON.parse(window.sessionStorage.user).id === data[i].user_id) {
						return i + 1;
					}
				}
			};
			let myRanking = findMyRanking(data);
			let myData = data.filter(
				mydata => mydata.user_id === JSON.parse(window.sessionStorage.user).id
			);
			console.log(myData);
			if (myData.length === 0) {
				myData = [
					{
						savetime: 0,
						user: { username: "start를 눌러 공부를 시작하세요!" },
					},
				];
			}
			let hourData = Math.floor(myData[0].savetime / 3600);
			let minData = Math.floor(
				(myData[0].savetime - Math.floor(myData[0].savetime / 3600) * 3600) / 60
			);
			let secData = Number(
				myData[0].savetime -
					Math.floor(myData[0].savetime / 3600) * 3600 -
					Math.floor(
						(myData[0].savetime -
							Math.floor(myData[0].savetime / 3600) * 3600) /
							60
					) *
						60
			);
			ReactDOM.render(
				<Container>
					<ul style={{ listStyle: "none", padding: 0 }}>
						<div>
							<PersonIcon />
							<li>{myRanking}</li>
						</div>
						<div>
							<li>{myData[0].user.username}</li>
							<li>
								<span>{hourData >= 10 ? hourData : "0" + hourData}</span>
								&nbsp;:&nbsp;
								<span>{minData >= 10 ? minData : "0" + minData}</span>
								&nbsp;:&nbsp;
								<span>{secData >= 10 ? secData : "0" + secData}</span>
							</li>
						</div>
						{/* <div className="ranking">{myData[0].ranking}</div> */}
					</ul>

					<div>
						{data
							.filter((rank, index) => index < 10)
							.map((student, index) => {
								let s_hourData = Math.floor(student.savetime / 3600);
								let s_minData = Math.floor(
									(student.savetime -
										Math.floor(student.savetime / 3600) * 3600) /
										60
								);
								let s_secData = Number(
									student.savetime -
										Math.floor(student.savetime / 3600) * 3600 -
										Math.floor(
											(student.savetime -
												Math.floor(student.savetime / 3600) * 3600) /
												60
										) *
											60
								);
								return (
									<List key={index}>
										<div>
											<PersonIcon />
											<ListItemText>{index + 1}</ListItemText>
										</div>
										<div>
											<ListItemText>{student.user.username}</ListItemText>
											<ListItemText>
												<span>
													{s_hourData >= 10 ? s_hourData : "0" + s_hourData}
												</span>
												&nbsp;:&nbsp;
												<span>
													{s_minData >= 10 ? s_minData : "0" + s_minData}
												</span>
												&nbsp;:&nbsp;
												<span>
													{s_secData >= 10 ? s_secData : "0" + s_secData}
												</span>
											</ListItemText>
										</div>
									</List>
								);
							})}
					</div>
				</Container>,
				document.getElementById("rankingtable")
			);
		})
		.catch(err => {
			console.log(err);
		});
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
