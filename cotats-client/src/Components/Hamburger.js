import React from "react";
import Record from "./Record";
import { Button } from "@material-ui/core";
import { fakedata } from "fakedata/fakedata";

function Hamburger(props) {
  return (
    <div className="sideMenu">
      {props.status === true ? (
        <Record open={props.open} fakedata={fakedata} refresh={props.refresh} />
      ) : (
        ""
      )}
      {props.status === false ? (
        <Button
          variant="outlined"
          color="primary"
          className="openBtn"
          onClick={props.close}>
          Ranking
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}
export default Hamburger;
