import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import logo from "../img/cotats_g_inner.png";
import Hamburger from "Components/Hamburger";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ReactDOM from "react-dom";
import { ListItem, ListItemText } from "@material-ui/core";
//햄버거버튼상태관리

function Header(props) {
<<<<<<< HEAD
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

        let myRanking = data.indexOf(
          data.user_id === JSON.parse(window.sessionStorage.user).id
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
                    <SList key={index}>
                      <>{index + 1}</>
                      <ListItem>
                        <ListItemText>{student.user.username}</ListItemText>
                        <ListItemText>
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
                        </ListItemText>
                      </ListItem>
                    </SList>
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
        let myRanking = data.indexOf(
          data.user_id === JSON.parse(window.sessionStorage.user).id
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
        console.log(
          JSON.parse(window.sessionStorage.user).id,
          "window.sessionStorage"
        );
        let myRanking = data.indexOf(
          data.user_id === JSON.parse(window.sessionStorage.user).id
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
              open={open} // 열렸
              close={close} //  닫혓
              status={menuStatus} // 열+닫 분기기준
              refresh={refresh} // 열렷
              weekly={weeklyRefresh} // 열
              monthly={monthlyRefresh} // 열
              setIsLogin={props.setIsLogin} //
            />
          </MenuBtn>
        </HeaderContainer>
      )}
    </>
  );
=======
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
		// refresh();
		setMenuStatus(true);
	};

	// const refresh = () => {
	// 	axios
	// 		.get("http://52.79.251.147:5000/time/timerank", {
	// 			params: { test: "gettest" },
	// 		})
	// 		.then((res) => {
	// 			console.log("refresh res test", res.data);
	// 			// let myData;
	// 			let data = res.data;
	// 			console.log(
	// 				JSON.parse(window.sessionStorage.user).id,
	// 				"window.sessionStorage"
	// 			);
	// 			//res로 받아오는 데이터의 인덱스를 받아오고 싶은데, -
	// 			//그 res.data[i]가 세션스토리지의 id와 동일한 i 를 출력 한다..
	// 			const findMyRanking = function (data) {
	// 				for (let i = 0; i < data.length; i++) {
	// 					if (JSON.parse(window.sessionStorage.user).id === data[i].user_id) {
	// 						return i + 1;
	// 					}
	// 				}
	// 			};
	// 			let myRanking = findMyRanking(data);
	// 			let myData = data.filter(
	// 				(mydata, index) =>
	// 					mydata.user_id === JSON.parse(window.sessionStorage.user).id
	// 			);
	// 			if (myData.length === 0) {
	// 				myData = [
	// 					{ savetime: 0, user: { username: "start를 눌러 시작해주세요!" } },
	// 				];
	// 			}
	// 			let hourData = Math.floor(myData[0].savetime / 3600);
	// 			let minData = Math.floor(
	// 				(myData[0].savetime - Math.floor(myData[0].savetime / 3600) * 3600) /
	// 					60
	// 			);
	// 			let secData = Number(
	// 				myData[0].savetime -
	// 					Math.floor(myData[0].savetime / 3600) * 3600 -
	// 					Math.floor(
	// 						(myData[0].savetime -
	// 							Math.floor(myData[0].savetime / 3600) * 3600) /
	// 							60
	// 					) *
	// 						60
	// 			);
	// 			ReactDOM.render(
	// 				<div>
	// 					<div>{`${new Date().getMonth() + 1}/${new Date().getDate()}`}</div>
	// 					<div className="mydata">
	// 						<div className="myranking">{myRanking}</div>
	// 						<div className="myname">{myData[0].user.username}</div>
	// 						<div className="mytime">
	// 							<span>{hourData >= 10 ? hourData : "0" + hourData}</span>
	// 							&nbsp;:&nbsp;
	// 							<span>{minData >= 10 ? minData : "0" + minData}</span>
	// 							&nbsp;:&nbsp;
	// 							<span>{secData >= 10 ? secData : "0" + secData}</span>
	// 						</div>
	// 						<div className="ranking">{myData[0].ranking}</div>
	// 					</div>
	// 					<div>
	// 						{data
	// 							.filter((rank, index) => index < 10)
	// 							.map((student, index) => {
	// 								let s_hourData = Math.floor(student.savetime / 3600);
	// 								let s_minData = Math.floor(
	// 									(student.savetime -
	// 										Math.floor(student.savetime / 3600) * 3600) /
	// 										60
	// 								);
	// 								let s_secData = Number(
	// 									student.savetime -
	// 										Math.floor(student.savetime / 3600) * 3600 -
	// 										Math.floor(
	// 											(student.savetime -
	// 												Math.floor(student.savetime / 3600) * 3600) /
	// 												60
	// 										) *
	// 											60
	// 								);
	// 								return (
	// 									<SList key={index}>
	// 										<>{index + 1}</>
	// 										<ListItem>
	// 											<ListItemText>{student.user.username}</ListItemText>
	// 											<ListItemText>
	// 												<span>
	// 													{s_hourData >= 10 ? s_hourData : "0" + s_hourData}
	// 												</span>
	// 												&nbsp;:&nbsp;
	// 												<span>
	// 													{s_minData >= 10 ? s_minData : "0" + s_minData}
	// 												</span>
	// 												&nbsp;:&nbsp;
	// 												<span>
	// 													{s_secData >= 10 ? s_secData : "0" + s_secData}
	// 												</span>
	// 											</ListItemText>
	// 										</ListItem>
	// 									</SList>
	// 								);
	// 							})}
	// 					</div>
	// 				</div>,
	// 				document.getElementById("rankingtable")
	// 			);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };
	// const weeklyRefresh = () => {
	// 	axios
	// 		.get("http://52.79.251.147:5000/time/timeweekrank", {
	// 			params: { test: "gettest" },
	// 		})
	// 		.then((res) => {
	// 			console.log("refresh res test", res.data);
	// 			// let myData;
	// 			let data = res.data;
	// 			console.log(
	// 				JSON.parse(window.sessionStorage.user).id,
	// 				"window.sessionStorage"
	// 			);
	// 			let myData = data.filter(
	// 				(mydata) =>
	// 					mydata.user_id === JSON.parse(window.sessionStorage.user).id
	// 			);
	// 			if (myData.length === 0) {
	// 				myData = [
	// 					{ savetime: 0, user: { username: "start를 눌러 시작해주세요!" } },
	// 				];
	// 			}
	// 			let hourData = Math.floor(myData[0].savetime / 3600);
	// 			let minData = Math.floor(
	// 				(myData[0].savetime - Math.floor(myData[0].savetime / 3600) * 3600) /
	// 					60
	// 			);
	// 			let secData = Number(
	// 				myData[0].savetime -
	// 					Math.floor(myData[0].savetime / 3600) * 3600 -
	// 					Math.floor(
	// 						(myData[0].savetime -
	// 							Math.floor(myData[0].savetime / 3600) * 3600) /
	// 							60
	// 					) *
	// 						60
	// 			);
	// 			ReactDOM.render(
	// 				<div>
	// 					<div>{`${new Date().getMonth() + 1}/${new Date().getDate()}`}</div>
	// 					<div className="mydata">
	// 						<div className="myname">{myData[0].user.username}</div>
	// 						<div className="mytime">
	// 							<span>{hourData >= 10 ? hourData : "0" + hourData}</span>
	// 							&nbsp;:&nbsp;
	// 							<span>{minData >= 10 ? minData : "0" + minData}</span>
	// 							&nbsp;:&nbsp;
	// 							<span>{secData >= 10 ? secData : "0" + secData}</span>
	// 						</div>
	// 						<div className="ranking">{myData[0].ranking}</div>
	// 					</div>
	// 					<div>
	// 						{data
	// 							.filter((rank, index) => index < 10)
	// 							.map((student, index) => {
	// 								let s_hourData = Math.floor(student.savetime / 3600);
	// 								let s_minData = Math.floor(
	// 									(student.savetime -
	// 										Math.floor(student.savetime / 3600) * 3600) /
	// 										60
	// 								);
	// 								let s_secData = Number(
	// 									student.savetime -
	// 										Math.floor(student.savetime / 3600) * 3600 -
	// 										Math.floor(
	// 											(student.savetime -
	// 												Math.floor(student.savetime / 3600) * 3600) /
	// 												60
	// 										) *
	// 											60
	// 								);
	// 								return (
	// 									<RecordList key={index}>
	// 										<>{index + 1}</>
	// 										<li>{student.user.username}</li>
	// 										<li>
	// 											<span>
	// 												{s_hourData >= 10 ? s_hourData : "0" + s_hourData}
	// 											</span>
	// 											&nbsp;:&nbsp;
	// 											<span>
	// 												{s_minData >= 10 ? s_minData : "0" + s_minData}
	// 											</span>
	// 											&nbsp;:&nbsp;
	// 											<span>
	// 												{s_secData >= 10 ? s_secData : "0" + s_secData}
	// 											</span>
	// 										</li>
	// 									</RecordList>
	// 								);
	// 							})}
	// 					</div>
	// 				</div>,
	// 				document.getElementById("rankingtable")
	// 			);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };
	// const monthlyRefresh = () => {
	// 	axios
	// 		.get("http://52.79.251.147:5000/time/timemonthrank", {
	// 			params: { test: "gettest" },
	// 		})
	// 		.then((res) => {
	// 			console.log("refresh res test", res.data);
	// 			// let myData;
	// 			let data = res.data;
	// 			console.log(
	// 				JSON.parse(window.sessionStorage.user).id,
	// 				"window.sessionStorage"
	// 			);
	// 			let myData = data.filter(
	// 				(mydata) =>
	// 					mydata.user_id === JSON.parse(window.sessionStorage.user).id
	// 			);
	// 			if (myData.length === 0) {
	// 				myData = [
	// 					{ savetime: 0, user: { username: "start를 눌러 시작해주세요!" } },
	// 				];
	// 			}
	// 			let hourData = Math.floor(myData[0].savetime / 3600);
	// 			let minData = Math.floor(
	// 				(myData[0].savetime - Math.floor(myData[0].savetime / 3600) * 3600) /
	// 					60
	// 			);
	// 			let secData = Number(
	// 				myData[0].savetime -
	// 					Math.floor(myData[0].savetime / 3600) * 3600 -
	// 					Math.floor(
	// 						(myData[0].savetime -
	// 							Math.floor(myData[0].savetime / 3600) * 3600) /
	// 							60
	// 					) *
	// 						60
	// 			);
	// 			ReactDOM.render(
	// 				<div>
	// 					<div>{`${new Date().getMonth() + 1}/${new Date().getDate()}`}</div>
	// 					<div className="mydata">
	// 						<div className="myname">{myData[0].user.username}</div>
	// 						<div className="mytime">
	// 							<span>{hourData >= 10 ? hourData : "0" + hourData}</span>
	// 							&nbsp;:&nbsp;
	// 							<span>{minData >= 10 ? minData : "0" + minData}</span>
	// 							&nbsp;:&nbsp;
	// 							<span>{secData >= 10 ? secData : "0" + secData}</span>
	// 						</div>
	// 						<div className="ranking">{myData[0].ranking}</div>
	// 					</div>
	// 					<div>
	// 						{data
	// 							.filter((rank, index) => index < 10)
	// 							.map((student, index) => {
	// 								let s_hourData = Math.floor(student.savetime / 3600);
	// 								let s_minData = Math.floor(
	// 									(student.savetime -
	// 										Math.floor(student.savetime / 3600) * 3600) /
	// 										60
	// 								);
	// 								let s_secData = Number(
	// 									student.savetime -
	// 										Math.floor(student.savetime / 3600) * 3600 -
	// 										Math.floor(
	// 											(student.savetime -
	// 												Math.floor(student.savetime / 3600) * 3600) /
	// 												60
	// 										) *
	// 											60
	// 								);
	// 								return (
	// 									<RecordList key={index}>
	// 										<>{index + 1}</>
	// 										<li>{student.user.username}</li>
	// 										<li>
	// 											<span>
	// 												{s_hourData >= 10 ? s_hourData : "0" + s_hourData}
	// 											</span>
	// 											&nbsp;:&nbsp;
	// 											<span>
	// 												{s_minData >= 10 ? s_minData : "0" + s_minData}
	// 											</span>
	// 											&nbsp;:&nbsp;
	// 											<span>
	// 												{s_secData >= 10 ? s_secData : "0" + s_secData}
	// 											</span>
	// 										</li>
	// 									</RecordList>
	// 								);
	// 							})}
	// 					</div>
	// 				</div>,
	// 				document.getElementById("rankingtable")
	// 			);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

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
							<Stext>
								<ExitToAppIcon />
								Sign Out
							</Stext>
						</Anchor>
						<Hamburger
							open={open} // 열렸
							close={close} //  닫혓
							status={menuStatus} // 열+닫
							// refresh={refresh} // 열렷
							// weekly={weeklyRefresh} // 열
							// monthly={monthlyRefresh} // 열
							// setIsLogin={props.setIsLogin}
						/>
					</MenuBtn>
				</HeaderContainer>
			)}
		</>
	);
>>>>>>> 7afc3c0f2894c641fd0d0a2c6cb6d520a153e300
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
<<<<<<< HEAD
const RecordList = styled.ul`
  list-style: none;
`;

const SList = styled(List)`
  background-color: #212121;
=======

const SList = styled.div`
	position: absolute;
	right: 30px;
>>>>>>> 7afc3c0f2894c641fd0d0a2c6cb6d520a153e300
`;

export default withRouter(Header);
