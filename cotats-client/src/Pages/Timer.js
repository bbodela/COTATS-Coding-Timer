import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayTimer from "Components/DisplayTimer";
import Btn from "Components/Btn";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { fetchQuotes } from "../fetchQuotes";

import Modal from "../Components/Modal";

const Timer = props => {
	const [status, setStatus] = useState(0);
	const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
	const [interv, setInterv] = useState();
	const [author, setAuthor] = useState(""); // 나중에 여기 api 로딩막대로 바꾸기
	const [quote, setQuote] = useState("");

	const searchQuotes = () => {
		let inputKeyword = document.querySelector(".keyword").value;
		fetchQuotes(inputKeyword, renderQuotes);
	};

	const renderQuotes = obj => {
		setAuthor(obj.author);
		setQuote(obj.body);
	};

	useEffect(() => {
		let defaultWord = "programming";
		fetchQuotes(defaultWord, renderQuotes);
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
		<>
			<div className="Timer">
				{props.isLogin === true ? (
					<Container>
						<TimerStyle>
							<Search>
								<InputText
									type="text"
									className="keyword"
									placeholder="키워드를 입력하세요🤑️"
								/>
								<button onClick={searchQuotes} style={{ borderRadius: 10 }}>
									🔍️SEARCH🔍️
								</button>
							</Search>
							<Quote>
								{quote}
								<Author>- {author}</Author>
							</Quote>

							<Time>
								<DisplayTimer time={time} />
							</Time>
							<Buttons>
								<Btn start={start} stop={stop} status={status} pause={pause} />
							</Buttons>
						</TimerStyle>
					</Container>
				) : (
					<Redirect from="*" to="/" />
				)}
			</div>
			{props.status === true ? (
				<ModalContainer>
					<Modal open={props.open} theme={props.theme} />
				</ModalContainer>
			) : (
				""
			)}
		</>
	);
};
const ModalContainer = styled.section`
	height: 80vh;
	width: 70vw;
	z-index: 100;
	display: flex;

	align-items: center;
`;
const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const TimerStyle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Quote = styled.div`
	padding: 16px;
	border: ${props =>
		props.theme.mode === "dark" ? "1px solid #f8f9fa" : "1px solid #dadada"};
	border-radius: 10px;
	width: 70%;
	align-items: center;
	font-size: 130%;
	font-style: italic;
`;
const Author = styled.div`
	text-align: right;
`;
const Time = styled.div`
	padding: 40px 0;
	width: 70%;
`;
const Buttons = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;
const Search = styled.div`
	width: 60%;
	height: 30px;
	display: flex;
	justify-content: center;
	opacity: 70%;
`;
const InputText = styled.input`
	color: ${props => (props.theme.mode === "dark" ? "#dadada" : "212121")};
	width: 130px;
	border: none;
	border-bottom: 2px solid #ccc;
	background-repeat: no-repeat;
	background-color: transparent;
	transition: width 0.7s ease-in-out;
	&:focus {
		width: 60%;
	}
`;
export default Timer;
