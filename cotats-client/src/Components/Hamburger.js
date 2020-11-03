import React, { useState } from "react";

import MenuIcon from "@material-ui/icons/Menu";
import RefreshRoundedIcon from "@material-ui/icons/RefreshRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import PersonIcon from "@material-ui/icons/Person";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import ReactDOM from "react-dom";
import styled from "styled-components";

function Hamburger(props) {
  const refresh = () => {
    axios
      .get("http://3.34.126.28:5000/time/timerank", {
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
        //res로 받아오는 데이터의 인덱스를 받아오고 싶은데, -
        //그 res.data[i]가 세션스토리지의 id와 동일한 i 를 출력 한다..
        const findMyRanking = function (data) {
          for (let i = 0; i < data.length; i++) {
            if (JSON.parse(window.sessionStorage.user).id === data[i].user_id) {
              return i + 1;
            }
          }
        };
        let myRanking = findMyRanking(data);
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
            <List>
              <div>
                <PersonIcon />
                <ListItemText>{myRanking}</ListItemText>
              </div>
              <div>
                <ListItemText>{myData[0].user.username}</ListItemText>
                <ListItemText>
                  <span>{hourData >= 10 ? hourData : "0" + hourData}</span>
                  &nbsp;:&nbsp;
                  <span>{minData >= 10 ? minData : "0" + minData}</span>
                  &nbsp;:&nbsp;
                  <span>{secData >= 10 ? secData : "0" + secData}</span>
                </ListItemText>
              </div>
              {/* <div className="ranking">{myData[0].ranking}</div> */}
            </List>

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
                    <List key={index}>
                      <div>
                        <PersonIcon />
                        <ListItemText>{index + 1}</ListItemText>
                      </div>
                      <div>
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
                      </div>
                    </List>
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
      .get("http://3.34.126.28:5000/time/timeweekrank", {
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

        const findMyRanking = function (data) {
          for (let i = 0; i < data.length; i++) {
            if (JSON.parse(window.sessionStorage.user).id === data[i].user_id) {
              return i + 1;
            }
          }
        };
        let myRanking = findMyRanking(data);

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
            <List>
              <div>
                <PersonIcon />
                <ListItemText>{myRanking}</ListItemText>
              </div>
              <div>
                <ListItemText>{myData[0].user.username}</ListItemText>
                <ListItemText>
                  <span>{hourData >= 10 ? hourData : "0" + hourData}</span>
                  &nbsp;:&nbsp;
                  <span>{minData >= 10 ? minData : "0" + minData}</span>
                  &nbsp;:&nbsp;
                  <span>{secData >= 10 ? secData : "0" + secData}</span>
                </ListItemText>
              </div>
              {/* <div className="ranking">{myData[0].ranking}</div> */}
            </List>

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
                    <List key={index}>
                      <div>
                        <PersonIcon />
                        <ListItemText>{index + 1}</ListItemText>
                      </div>
                      <div>
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
                      </div>
                    </List>
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
      .get("http://3.34.126.28:5000/time/timemonthrank", {
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

        const findMyRanking = function (data) {
          for (let i = 0; i < data.length; i++) {
            if (JSON.parse(window.sessionStorage.user).id === data[i].user_id) {
              return i + 1;
            }
          }
        };
        let myRanking = findMyRanking(data);

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
            <List>
              <div>
                <PersonIcon />
                <ListItemText>{myRanking}</ListItemText>
              </div>
              <div>
                <ListItemText>{myData[0].user.username}</ListItemText>
                <ListItemText>
                  <span>{hourData >= 10 ? hourData : "0" + hourData}</span>
                  &nbsp;:&nbsp;
                  <span>{minData >= 10 ? minData : "0" + minData}</span>
                  &nbsp;:&nbsp;
                  <span>{secData >= 10 ? secData : "0" + secData}</span>
                </ListItemText>
              </div>
              {/* <div className="ranking">{myData[0].ranking}</div> */}
            </List>

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
                    <List key={index}>
                      <div>
                        <PersonIcon />
                        <ListItemText>{index + 1}</ListItemText>
                      </div>
                      <div>
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
                      </div>
                    </List>
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
    <SList>
      {props.status === true ? ( // 열렸을때
        <div>
          <div className="hamburgerMenuSide">
            <Dialog
              open={props.open}
              aria-labelledby="dialog-title"
              refresh={refresh}>
              <CloseRoundedIcon
                fontSize="large"
                onClick={props.open}
                style={{
                  color: "black",
                  cursor: "pointer",
                }}
              />{" "}
              <DialogTitle id="dialog-title">
                <h2>{`${
                  new Date().getMonth() + 1
                }/${new Date().getDate()}`}</h2>
              </DialogTitle>
              <List>
                <ListItem>
                  <Button
                    style={{
                      color: "black",
                    }}
                    onClick={refresh}>
                    TODAY
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    style={{
                      color: "black",
                    }}
                    className="weekly"
                    onClick={weeklyRefresh}>
                    weekly
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    style={{
                      color: "black",
                    }}
                    className="monthly"
                    onClick={monthlyRefresh}>
                    monthly
                  </Button>
                </ListItem>
              </List>
              <div id="rankingtable"></div>
            </Dialog>
          </div>
        </div>
      ) : (
        ""
      )}
      {props.status === false ? (
        <Button>
          <MenuIcon
            className="openBtn"
            fontSize="large"
            onClick={props.close}
            style={{
              color: "white",
              fontSize: 35,
            }}
          />
        </Button>
      ) : (
        ""
      )}
    </SList>
  );
}

const SList = styled.div`
  position: absolute;
  right: 30px;
`;

const RecordList = styled.ul`
  list-style: none;
`;

export default Hamburger;

const LogoutAnchor = styled(Button)`
  --max-height: 64px;
  --side-padding: 8px;
  height: 100%;
  color: whitesmoke;
  float: right;
  &:hover {
    font-size: 140%;
    color: lightslategrey;
  }
  &:link {
    color: white;
  }
  &:visited {
    color: white;
  }
`;
