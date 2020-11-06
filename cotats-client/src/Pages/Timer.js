import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayTimer from "Components/DisplayTimer";
import Btn from "Components/Btn";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { fetchQuotes } from "../fetchQuotes";

const Timer = props => {
	const [status, setStatus] = useState(0);
	const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
	const [interv, setInterv] = useState();
	const [author, setAuthor] = useState(""); // 나중에 여기 api 로딩막대로 바꾸기
	const [quote, setQuote] = useState("");

	const renderQuotes = obj => {
		setAuthor(obj.author);
		setQuote(obj.body);
	};

	useEffect(() => {
		fetchQuotes(renderQuotes);
	}, []);

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
			.post("http://3.34.48.151:5000/time/timestart", {
				user_id: JSON.parse(window.sessionStorage.user).id,
			})
			.then(res => {
				console.log("timer start부분 res", res);
			})
			.catch(err => {
				console.log(err);
			});
		setStatus(1);
		run();
		setInterv(setInterval(run, 10));
	};

	const pause = () => {
		clearInterval(interv);
		setStatus(2);
	};

	const stop = () => {
		clearInterval(interv);
		setTime({ ms: 0, s: 0, m: 0, h: 0 });
		postTime();
		setStatus(2);
	};

	const postTime = () => {
		let today = `${new Date().getFullYear()}/${
			new Date().getMonth() + 1
		}/${new Date().getDate()}`;

		axios
			.post("http://3.34.48.151:5000/time/timepause", {
				savetime: time.h * 3600 + time.m * 60 + time.s,
				user_id: JSON.parse(window.sessionStorage.user).id,
			})
			.then(res => {
				console.log("timer stop부분 res expect:time,day,userId", res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className="Timer">
			{props.isLogin === true ? (
				<Background>
					<div>
						{quote}- {author}
					</div>
					<DisplayTimer time={time} />
					<Btn start={start} stop={stop} status={status} pause={pause} />
				</Background>
			) : (
				<Redirect from="*" to="/" />
			)}
		</div>
	);
};

const Background = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
`;

export default Timer;
