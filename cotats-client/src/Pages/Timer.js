// signOut 기능을 할 수 있는 버튼을 여기에
import React, { useState } from "react";
import axios from "axios";
import DisplayTimer from "Components/DisplayTimer";
import Btn from "Components/Btn";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

function Timer(props) {
  const [status, setStatus] = useState(0);
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();

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
      .post("http://3.34.126.28:5000/time/timestart", {
        user_id: JSON.parse(window.sessionStorage.user).id,
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

  const postTime = (props) => {
    let today = `${new Date().getFullYear()}/${
      new Date().getMonth() + 1
    }/${new Date().getDate()}`;
    // console.log(`${time.h}:${time.m}:${time.s}`, today);
    console.log(time.h * 3600 + time.m * 60 + time.s, "초단위 테스트");
    axios
      .post("http://3.34.126.28:5000/time/timepause", {
        // savetime: `${time.h}:${time.m}:${time.s}`,
        savetime: time.h * 3600 + time.m * 60 + time.s,
        user_id: JSON.parse(window.sessionStorage.user).id,
      })
      .then((res) => {
        console.log("timer stop부분 res expect:time,day,userId", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Timer">
      {/* {props.isLogin === true ? ( */}
        <Background>
          <DisplayTimer time={time} />
          <Btn
            start={start}
            stop={stop}
            status={status}
            pause={pause}
            posttime={postTime}
          />
        </Background>
      {/* ) : (
        <Redirect from="*" to="/" />
      )} */}
    </div>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  height: 100%;
`;

export default Timer;
