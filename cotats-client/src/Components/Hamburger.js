import React from "react";
import Record from "./Record";
import { fakedata } from "fakedata/fakedata";

function Hamburger(props) {
  return (
    <div className="sideMenu">
      {props.status === true ? (
        <Record
          open={props.open}
          fakedata={fakedata} //maybe it will be res
          refresh={props.refresh} //refresh로 return res를 했는데 res가 잘 나오는지 확인할것
          setIsLogin={props.setIsLogin}
        />
      ) : (
        ""
      )}
      {props.status === false ? (
        <button className="openBtn" onClick={props.close}>
          open
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
export default Hamburger;
