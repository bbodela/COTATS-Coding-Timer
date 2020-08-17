import React from "react";
import { Button } from "@material-ui/core";
import RefreshRoundedIcon from "@material-ui/icons/RefreshRounded";
import { fakedata } from "../fakedata/fakedata";

const Record = (props) => {
  let myData;
  let index;
  let rankingData = [];
  for (let i = 0; i < props.fakedata.length; i += 1) {
    if (fakedata[i].id === 4) {
      myData = fakedata[i];
    }
  }
  for (let i = 0; i < 10; i += 1) {
    rankingData.push(fakedata[i]);
  }
  return (
    <div>
      <div className="hamburgerMenuSide">
        <Button
          variant="outlined"
          color="primary"
          className="closeBtn"
          onClick={props.open}>
          close
        </Button>
        <Button>
          <RefreshRoundedIcon
            color="action"
            className="refresh"
            fontSize="large"
            onClick={props.refresh}
          />
        </Button>
        <Button onClick={props.handleLogoutChange}>logout</Button>

        <div>{`${new Date().getMonth() + 1}/${new Date().getDate()}`}</div>
        <div className="mydata">
          <div className="myname">{myData.username}</div>
          <div className="mytime">{myData.time}</div>
          <div className="ranking">{myData.id}</div>
        </div>
        <div>
          {rankingData.map((data, index) => {
            return (
              <ul key={index}>
                <li>{index + 1}</li>
                <li>{data.username}</li>
                <li>{data.time}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Record;
