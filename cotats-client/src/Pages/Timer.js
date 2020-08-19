// signOut 기능을 할 수 있는 버튼을 여기에
import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import DisplayTimer from "Components/DisplayTimer";
import Btn from "Components/Btn";
import Hamburger from "Components/Hamburger";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { fakedata } from "../fakedata/fakedata";

function Timer(props) {
	// console.log("타이머props", props);
	//state 변수 및 세팅
	const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
	const [interv, setInterv] = useState();
	const [status, setStatus] = useState(0);
	//0: 처음 상태, 1: 타이머 돌아가는 상태, 2: 일시정지 상태
	const [menuStatus, setMenuStatus] = useState(false);
	//timer 변수
	let updatedH = time.h;
	let updatedM = time.m;
	let updatedS = time.s;
	let updatedMs = time.ms;
	//함수
	const run = () => {
		//타이머 작동 함수, start 버튼을 누르면 실행
		if (updatedH === 24) {
			updatedH = 0;
		}
		if (updatedM > 59) {
			updatedH += 1;
			updatedM = 0;
		}
		if (updatedS > 59) {
			updatedM += 1;
			updatedS = 0;
		}
		if (updatedMs > 99) {
			updatedS += 1;
			updatedMs = 0;
		}
		updatedMs += 1;
		return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
	};
	const start = () => {
		axios
			.post("http://3.18.213.157:5000/time/timestart")
			.then((res) => {
				console.log("timer start부분 res", res);
			})
			.catch((err) => {
				console.log(err);
			});
		setStatus(1);
		run();
		setInterv(setInterval(run, 10));
	};
	const stop = () => {
		clearInterval(interv);
		setStatus(2);
		postTime();
	};
	const open = () => {
		setMenuStatus(false);
	};
	const close = () => {
		refresh();
		setMenuStatus(true);
	};
	const postTime = (props) => {
		let today = `${new Date().getFullYear()}/${
			new Date().getMonth() + 1
		}/${new Date().getDate()}`;
		console.log(`${time.h}:${time.m}:${time.s}`, today);
		axios
			.post("http://3.18.213.157:5000/time/timepause", {
				savetime: `${time.h}:${time.m}:${time.s}`,
				// day: today,
				// username: props.userinfo.username,
				// id: props.userinfo.id, //userid
			})
			.then((res) => {
				console.log("timer stop부분 res expect:time,day,userId", res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const refresh = () => {
		axios
			.get("http://3.18.213.157:5000/time/timerank", {
				params: { test: "gettest" },
			})
			.then((res) => {
				console.log("refresh res test", res.data);
				// let myData;
				let data = res.data; //[{…}, {…}, {…}, {…}, {…}, {…}]
				let myData = data.filter((mine) => mine.id === 4);
				let ranking = data.indexOf;
				// 세션아이디=유저아이디 같은 유저의 data내에서의 index

				ReactDOM.render(
					<div>
						<div>{`${new Date().getMonth() + 1}/${new Date().getDate()}`}</div>
						<div className="mydata">
							<div className="myname">{myData[0].user.username}</div>
							<div className="mytime">{myData[0].savetime}</div>
							<div className="ranking">{myData[0].id}</div>
						</div>
						<div>
							{data
								.filter((rank, index) => index < 10)
								.map((student, index) => {
									return (
										<ul key={index}>
											<li>{index + 1}</li>
											<li>{student.user.username}</li>
											<li>{student.savetime}</li>
										</ul>
									);
								})}
						</div>
						document.getElementById("rankingtable")
					</div>
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="Timer">
			{props.isLogin === true ? (
				<Background>
					<Hamburger
						open={open}
						close={close}
						status={menuStatus}
						refresh={refresh}
						setIsLogin={props.setIsLogin}
					/>

					<DisplayTimer time={time} />
					<Btn start={start} stop={stop} status={status} posttime={postTime} />
				</Background>
			) : (
				<Redirect from="*" to="/" />
			)}
		</div>
	);
}

const Background = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
`;

export default Timer;
