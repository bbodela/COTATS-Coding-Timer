import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import logo from "../img/cotats_g_inner.png";
import Hamburger from "Components/Hamburger";
import ReactDOM from "react-dom";

function Header(props) {
  const [menuStatus, setMenuStatus] = useState(false);

  const open = () => {
    setMenuStatus(false);
  };
  const close = () => {
    refresh();
    setMenuStatus(true);
  };
  const refresh = () => {
    axios
      .get("http://52.79.251.147:5000/time/timerank", {
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
        let myRanking = data.findIndex(
          (mydata) =>
            mydata.user_id === JSON.parse(window.sessionStorage.user).id
        );
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
            <div>{`${new Date().getMonth() + 1}/${new Date().getDate()}`}</div>
            <div className="mydata">
              <div className="myranking">{myRanking}</div>
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
                    <RecordList key={index}>
                      <>{index + 1}</>
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
                    </RecordList>
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
        console.log("weeklyrefresh res test", res.data);
        // let myData;
        let data = res.data;
        console.log(
          JSON.parse(window.sessionStorage.user).id,
          "window.sessionStorage"
        );
        let myRanking = data.findIndex(
          (mydata) =>
            mydata.user_id === JSON.parse(window.sessionStorage.user).id
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
              <div className="myranking">{myRanking}</div>
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
                    <RecordList key={index}>
                      <>{index + 1}</>
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
                    </RecordList>
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
        console.log("monthlyrefresh res test", res.data);
        // let myData;
        let data = res.data;

        let myRanking = data.findIndex(
          (mydata) =>
            mydata.user_id === JSON.parse(window.sessionStorage.user).id
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
              <div className="myranking">{myRanking}</div>
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
                    <RecordList key={index}>
                      <>{index + 1}</>
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
                    </RecordList>
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
    <>
      {props.isLogin === false ? (
        <LoginHeaderContainer>
          <LoginMenuBtn>
            <LoginAnchor to="/signin">
              <LoginStext>Sign In</LoginStext>
            </LoginAnchor>
            <LoginAnchor to="/signup">
              <LoginStext>JOIN</LoginStext>
            </LoginAnchor>
          </LoginMenuBtn>
        </LoginHeaderContainer>
      ) : (
        <HeaderContainer>
          <BlinkingLogo>
            <Anchor to="/">
              <img src={logo} width="100" height="25" alt="logo" />
            </Anchor>
          </BlinkingLogo>
          <Wrapdiv>
            <Hamburger
              open={open}
              close={close}
              status={menuStatus}
              refresh={refresh}
              weekly={weeklyRefresh}
              monthly={monthlyRefresh}
              setIsLogin={props.setIsLogin}
              logout={logoutHandler}></Hamburger>
          </Wrapdiv>
        </HeaderContainer>
      )}
    </>
  );
}
const Wrapdiv = styled.div`
  text-align: center;
`;
const HeaderContainer = styled.div`
  .logo {
    padding: 15px 0 10px 15px;
  }

  padding-right: 38px;
  line-height: 60px;
  padding-top: 10px;
  padding-left: 10px;
  --max-height: 64px;
  --side-padding: 8px;
  align-items: stretch;
  flex: 1 1 auto;
  position: relative;
  display: flex;
  @media screen and (max-width: 600px) {
    padding-top: 10px;
    padding-left: 0;
    padding-right: 0;
  }
`;

const LoginHeaderContainer = styled.div`
  display: flex;

  justify-content: center;
  padding-top: 50%;
  padding: 5px 10px;

  .logo {
    padding: 15px 0 10px 15px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-content: flex-start;
    padding-top: 10px;
    padding-left: 0;
    padding-right: 0;
  }
`;
const LoginMenuBtn = styled.div`
  align-items: right;
  display: flex;
  float: right;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const LoginStext = styled.a`
  flex: right;
  color: whitesmoke;
  font-size: 20px;
  padding-top: 10px;
  padding: 15px;
  &:hover {
    font-size: 140%;
    color: lightslategrey;
  }
  &:link {
    color: white;
  }
  &:visited {
    color: white;
    text-decoration: none;
  }
`;
const LoginAnchor = styled(Link)`
  text-decoration: none;
`;

const blink = keyframes`
			50% {
				opacity: 0;
			}
		`;
const BlinkingLogo = styled.span`
  animation: ${blink} 1s linear infinite;
  text-decoration: none;
  --max-height: 64px;
  --side-padding: 8px;
  align-items: stretch;
  position: relative;
  font-weight: 500;
`;

const Anchor = styled(Link)`
  text-decoration: none;
`;

const RecordList = styled.ul`
  list-style: none;
`;
export default withRouter(Header);
