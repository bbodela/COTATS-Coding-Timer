import React from "react";
import Record from "./Record";
import { fakedata } from "fakedata/fakedata";

function Hamburger(props) {
  return (
    <div className="sideMenu">
      {props.status === true ? (
        <Record open={props.open} fakedata={fakedata} />
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
