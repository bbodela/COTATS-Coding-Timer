// signOut 기능을 할 수 있는 버튼을 여기에
import React, { useState } from "react";
import DisplayTimer from "Components/DisplayTimer";
import Btn from "Components/Btn";
import Hamburger from "Components/Hamburger";
// import "./Timer.css";

function Timer() {
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
		setStatus(1);
		run();
		setInterv(setInterval(run, 10));
	};
	const stop = () => {
		clearInterval(interv);
		setStatus(2);
	};
	const open = () => {
		setMenuStatus(false);
	};
	const close = () => {
		setMenuStatus(true);
	};
	return (
		<div className="Timer">
			<Hamburger open={open} close={close} status={menuStatus} />
			<DisplayTimer time={time} />
			<Btn start={start} stop={stop} status={status} />
		</div>
	);
}
export default Timer;
