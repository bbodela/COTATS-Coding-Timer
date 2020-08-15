// signOut 기능을 할 수 있는 버튼을 여기에
import React, { useState } from "react";
import axios from "axios";

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
    postTime();
  };
  const open = () => {
    setMenuStatus(false);
  };
  const close = () => {
    setMenuStatus(true);
  };
  const postTime = () => {
    let today = `${new Date().getFullYear()}/${
      new Date().getMonth() + 1
    }/${new Date().getDate()}`;
    console.log(`${time.h}:${time.m}:${time.s}`, today);

    axios
      .post("http://localhost:4000/timer", {
        time: `${time.h}:${time.m}:${time.s}`,
        day: today,
        userId: 1,
      })
      .then((res) => {
        console.log("timer부분 res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const refresh = () => {
    axios
      .get("http://localhost:4000/timer", {
        params: { test: "gettest" },
      })
      .then((res) => {
        console.log("refresh res test", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Timer">
      <Hamburger
        open={open}
        close={close}
        status={menuStatus}
        refresh={refresh}
      />
      <DisplayTimer time={time} />
      <Btn start={start} stop={stop} status={status} posttime={postTime} />
    </div>
  );
}
export default Timer;
