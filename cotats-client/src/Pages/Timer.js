// signOut 기능을 할 수 있는 버튼을 여기에
import React, { useState } from "react";
import axios from "axios";

import DisplayTimer from "Components/DisplayTimer";
import Btn from "Components/Btn";
import Hamburger from "Components/Hamburger";
import { Redirect } from "react-router-dom";
// import "./Timer.css";
function Timer(props) {
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
      .post("http://3.18.213.157:5000/timer", {
        username: props.userinfo.username,
        id: props.userinfo.id,
      })
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
      .post("http://3.18.213.157:5000/timer", {
        savetime: `${time.h}:${time.m}:${time.s}`,
        username: props.userinfo.username,
        day: today,
        id: props.userinfo.id, //userid
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
      .get("http://3.18.213.157:5000/timer", {
        params: { test: "gettest" },
      })
      .then((res) => {
        console.log("refresh res test", res);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Timer">
      {props.isLogin === true ? (
        <div>
          <Hamburger
            open={open}
            close={close}
            status={menuStatus}
            refresh={refresh}
            setIsLogin={props.setIsLogin}
          />
          <DisplayTimer time={time} />
          <Btn start={start} stop={stop} status={status} posttime={postTime} />
        </div>
      ) : (
        <Redirect from="*" to="/" />
      )}
    </div>
  );
}
export default Timer;
