import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import logo from "../img/cotats_g_inner.png";
import Hamburger from "Components/Hamburger";
import ReactDOM from "react-dom";

function Header(props) {
  const [status, setStatus] = useState(0);
  const [menuStatus, setMenuStatus] = useState(false);

  const logoutHandler = () => {
    axios
      .post("http://52.79.251.147:5000/user/signout")
      .then((res) => {
        console.log("헤더signout버튼클릭 시 res", res);
        props.logoutChangeHandler();
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
  const weeklyrefresh = () => {
    axios
      .get("http://52.79.251.147:5000/timeweekrank", {
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
  const monthlyrefresh = () => {
    axios
      .get("http://52.79.251.147:5000/timemonthrank", {
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
        <HeaderContainer>
          <MenuBtn>
            <Anchor to="/signin">
              <Stext>Sign In</Stext>
            </Anchor>
            <Anchor to="/signup">
              <Stext>JOIN</Stext>
            </Anchor>
          </MenuBtn>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <BlinkingLogo>
            <Anchor to="/">
              <img src={logo} width="100" height="25" alt="logo" />
            </Anchor>
          </BlinkingLogo>
          <MenuBtn>
            <Anchor to="/" onClick={() => logoutHandler()}>
              <Stext>Sign Out</Stext>
            </Anchor>
            <Hamburger
              open={open}
              close={close}
              status={menuStatus}
              refresh={refresh}
              setIsLogin={props.setIsLogin}
            />
          </MenuBtn>
        </HeaderContainer>
      )}
    </>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const blink = keyframes`
			50% {
				opacity: 0;
			}
		`;

const BlinkingLogo = styled.div`
  animation: ${blink} 1s linear infinite;
  text-decoration: none;
`;

const Anchor = styled(Link)`
  text-decoration: none;
`;

const Stext = styled.a`
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

const MenuBtn = styled.div`
  display: flex;
  padding-left: 0;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const RecordList = styled.ul`
  list-style: none;
`;

export default withRouter(Header);
