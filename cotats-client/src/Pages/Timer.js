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
      .post("http://3.18.213.157:5000/time/timestart", {
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
    // console.log(`${time.h}:${time.m}:${time.s}`, today);
    console.log(time.h * 3600 + time.m * 60 + time.s, "초단위 테스트");
    axios
      .post("http://3.18.213.157:5000/time/timepause", {
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
  const refresh = () => {
    axios
      .get("http://3.18.213.157:5000/time/timerank", {
        params: { test: "gettest" },
      })
      .then((res) => {
        console.log("refresh res test", res.data);
        // let myData;
        let data = res.data;

        console.log(
          JSON.parse(window.sessionStorage.user).id,
          "window.sessionStorage"
        );

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
            <div>{`${new Date().getMonth() + 1}/${new Date().getDate()}`}</div>
            <div className="mydata">
              <div className="myname">{myData[0].user.username}</div>
              <div className="mytime">
                <span>{hourData >= 10 ? hourData : "0" + hourData}</span>
                &nbsp;:&nbsp;
                <span>{minData >= 10 ? minData : "0" + minData}</span>
                &nbsp;:&nbsp;
                <span>{secData >= 10 ? secData : "0" + secData}</span>
              </div>
              <div className="ranking">{myData[0].ranking}</div>
            </div>
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
                    <ul key={index}>
                      <li>{index + 1}</li>
                      <li>{student.user.username}</li>
                      <li>
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
                      </li>
                    </ul>
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
          <Btn
            start={start}
            stop={stop}
            status={status}
            pause={pause}
            posttime={postTime}
          />
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
