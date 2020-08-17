import React from "react";
import { Button } from "@material-ui/core";

function Btn(props) {
  return (
    <div className="Btn">
      {props.status === 0 || props.status === 2 ? (
        <Button
          variant="contained"
          color="primary"
          className="start"
          onClick={props.start}>
          start
        </Button>
      ) : (
        ""
      )}
      {props.status === 1 ? (
        <Button
          variant="contained"
          color="secondary"
          className="stop"
          onClick={props.stop}>
          stop
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}
export default Btn;
