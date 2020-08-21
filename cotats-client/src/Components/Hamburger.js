import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import PersonIcon from "@material-ui/icons/Person";
import {
	Button,
	List,
	ListItem,
	ListItemText,
	Dialog,
	DialogTitle,
} from "@material-ui/core";
import axios from "axios";
import ReactDOM from "react-dom";
import styled from "styled-components";

function Hamburger(props) {
	const refresh = () => {
		axios
			.get("http://52.79.251.147:5000/time/timerank", {
				params: { test: "gettest" },
			})
			.then((res) => {
				let data = res.data;
				console.log(
					JSON.parse(window.sessionStorage.user).id,
					"window.sessionStorage"
				);
				const findMyRanking = function (data) {
					for (let i = 0; i < data.length; i++) {
						if (JSON.parse(window.sessionStorage.user).id === data[i].user_id) {
							return i + 1;
						}
					}
				};
				let myRanking = findMyRanking(data);
				let myData = data.filter(
					(mydata, index) =>
						mydata.user_id === JSON.parse(window.sessionStorage.user).id
				);
				if (myData.length === 0) {
					myData = [
						{ savetime: 0, user: { username: "start를 눌러 시작해주세요!" } },
					];
				}
				let hourData = Math.floor(myData[0].savetime / 3600);
				let minData = Math.floor(
					(myData[0].savetime - Math.floor(myData[0].savetime / 3600) * 3600) /
						60
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
					<div>
						<UsersContainer style={{ background: "#f2f2f2" }}>
							<User>
								<PersonIcon />
								<ListItemText>
									<Rank>{myRanking}</Rank>
								</ListItemText>
							</User>
							<div>
								<ListItemText>
									<b>{myData[0].user.username}</b>
								</ListItemText>
								<ListItemText>
									<span>{hourData >= 10 ? hourData : "0" + hourData}</span>
									&nbsp;:&nbsp;
									<span>{minData >= 10 ? minData : "0" + minData}</span>
									&nbsp;:&nbsp;
									<span>{secData >= 10 ? secData : "0" + secData}</span>
								</ListItemText>
							</div>
						</UsersContainer>

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
										<UsersContainer key={index}>
											<user>
												<PersonIcon />
												<ListItemText>{index + 1}</ListItemText> <BorderLine />
											</user>

											<div>
												<ListItemText>
													<b>{student.user.username}</b>
												</ListItemText>
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
												</ListItemText>{" "}
												<BorderLine />
											</div>
										</UsersContainer>
									);
								})}
						</div>
					</div>,
					document.getElementById("rankingtable")
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const weeklyRefresh = () => {
		axios
			.get("http://52.79.251.147:5000/time/timeweekrank", {
				params: { test: "gettest" },
			})
			.then((res) => {
				let data = res.data;

				const findMyRanking = function (data) {
					for (let i = 0; i < data.length; i++) {
						if (JSON.parse(window.sessionStorage.user).id === data[i].user_id) {
							return i + 1;
						}
					}
				};
				let myRanking = findMyRanking(data);

				let myData = data.filter(
					(mydata) =>
						mydata.user_id === JSON.parse(window.sessionStorage.user).id
				);
				if (myData.length === 0) {
					myData = [
						{ savetime: 0, user: { username: "start를 눌러 시작해주세요!" } },
					];
				}
				let hourData = Math.floor(myData[0].savetime / 3600);
				let minData = Math.floor(
					(myData[0].savetime - Math.floor(myData[0].savetime / 3600) * 3600) /
						60
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
					<div>
						<UsersContainer style={{ background: "#f2f2f2" }}>
							<User>
								<PersonIcon />
								<ListItemText>
									<Rank>{myRanking}</Rank>
								</ListItemText>
							</User>
							<div>
								<ListItemText>
									<b>{myData[0].user.username}</b>
								</ListItemText>
								<ListItemText>
									<span>{hourData >= 10 ? hourData : "0" + hourData}</span>
									&nbsp;:&nbsp;
									<span>{minData >= 10 ? minData : "0" + minData}</span>
									&nbsp;:&nbsp;
									<span>{secData >= 10 ? secData : "0" + secData}</span>
								</ListItemText>
							</div>
						</UsersContainer>

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
										<UsersContainer key={index}>
											<User>
												<PersonIcon />
												<ListItemText>{index + 1}</ListItemText> <BorderLine />
											</User>
											<div>
												<ListItemText>
													<b>{student.user.username}</b>
												</ListItemText>
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
												</ListItemText>{" "}
												<BorderLine />
											</div>
										</UsersContainer>
									);
								})}
						</div>
					</div>,
					document.getElementById("rankingtable")
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const monthlyRefresh = () => {
		axios
			.get("http://52.79.251.147:5000/time/timemonthrank", {
				params: { test: "gettest" },
			})
			.then((res) => {
				let data = res.data;
				const findMyRanking = function (data) {
					for (let i = 0; i < data.length; i++) {
						if (JSON.parse(window.sessionStorage.user).id === data[i].user_id) {
							return i + 1;
						}
					}
				};
				let myRanking = findMyRanking(data);

				let myData = data.filter(
					(mydata) =>
						mydata.user_id === JSON.parse(window.sessionStorage.user).id
				);
				if (myData.length === 0) {
					myData = [
						{ savetime: 0, user: { username: "start를 눌러 시작해주세요!" } },
					];
				}
				let hourData = Math.floor(myData[0].savetime / 3600);
				let minData = Math.floor(
					(myData[0].savetime - Math.floor(myData[0].savetime / 3600) * 3600) /
						60
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
					<div>
						<UsersContainer style={{ background: "#f2f2f2" }}>
							<User>
								<PersonIcon />
								<ListItemText>
									<Rank>{myRanking}</Rank>
								</ListItemText>
							</User>
							<div>
								<ListItemText>
									<b>{myData[0].user.username}</b>
								</ListItemText>
								<ListItemText>
									<span>{hourData >= 10 ? hourData : "0" + hourData}</span>
									&nbsp;:&nbsp;
									<span>{minData >= 10 ? minData : "0" + minData}</span>
									&nbsp;:&nbsp;
									<span>{secData >= 10 ? secData : "0" + secData}</span>
								</ListItemText>
							</div>
						</UsersContainer>

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
										<UsersContainer key={index}>
											<User>
												<PersonIcon />
												<ListItemText>{index + 1}</ListItemText>
												<BorderLine />
											</User>

											<div>
												<ListItemText>
													<b>{student.user.username}</b>
												</ListItemText>
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
												<BorderLine />
											</div>
										</UsersContainer>
									);
								})}
						</div>
					</div>,
					document.getElementById("rankingtable")
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<SList>
			{props.status === true ? ( // 열렸을때
				<div>
					<div className="hamburgerMenuSide">
						<Dialog
							fullWidth={true}
							maxWidth={"xs"}
							open={props.open}
							aria-labelledby="confirmation-dialog-title"
							refresh={refresh}
							style={{
								textAlign: "center",
								alignContent: "center",
							}}
						>
							<CloseRoundedIcon
								fontSize="large"
								onClick={props.open}
								style={{
									color: "black",
									cursor: "pointer",
								}}
							/>
							<DialogTitle id="dconfirmation-dialog-title">
								<span style={{ fontSize: 24, color: "black" }}>{`${
									new Date().getMonth() + 1
								}월 ${new Date().getDate()}일`}</span>
							</DialogTitle>
							<List style={{ display: "flex" }}>
								<ListItem
									autoFocus
									button
									onClick={refresh}
									style={{
										color: "black",
									}}
								>
									TODAY
								</ListItem>
								<ListItem
									autoFocus
									button
									onClick={weeklyRefresh}
									style={{
										color: "black",
									}}
								>
									WEEKLY
								</ListItem>
								<ListItem
									autoFocus
									button
									onClick={monthlyRefresh}
									style={{
										color: "black",
									}}
								>
									MONTHLY
								</ListItem>
							</List>
							<div id="rankingtable"></div>
						</Dialog>
					</div>
				</div>
			) : (
				""
			)}
			{props.status === false ? (
				<Button>
					<MenuIcon
						className="openBtn"
						fontSize="large"
						onClick={props.close}
						style={{
							color: "white",
							fontSize: 35,
						}}
					/>
				</Button>
			) : (
				""
			)}
		</SList>
	);
}

const SList = styled.div`
	position: absolute;
	right: 30px;
`;

const UsersContainer = styled.div`
	background: "#f2f2f2";
	display: grid;
	grid-template-columns: 30% 70%;
`;

const User = styled.div`
	grid-column: 1/2;
`;

const Rank = styled.span`
	font-size: 20px;
`;

const BorderLine = styled.div`
	border-bottom: 1px solid #f2f2f2;
`;

export default Hamburger;
