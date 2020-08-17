import React from "react";
import { fakedata } from "../fakedata/fakedata";

const Record = (props) => {
  let myData;
  let index;
  let rankingData = [];
  for (let i = 0; i < props.fakedata.length; i += 1) {
    if (fakedata[i].id === 4) {
      //res에서 userid 불러오기
      myData = fakedata[i]; //fakedata[i] = userid 일치하는 배열 가져오기
    }
  }
  for (let i = 0; i < 10; i += 1) {
    rankingData.push(fakedata[i]);
  }
  return (
    <div>
      <div className="hamburgerMenuSide">
        <button className="refresh" onClick={props.refresh}>
          *
        </button>
        <button className="closeBtn" onClick={props.open}>
          close
        </button>
        <button className="logoutBtn" onClick={props.setIsLogin}>
          {/* 버튼이벤트 - 액시오스(user/signout) */}
          logout
        </button>
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
