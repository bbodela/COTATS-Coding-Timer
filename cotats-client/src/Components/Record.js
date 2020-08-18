import React from "react";
import { Button } from "@material-ui/core";
import RefreshRoundedIcon from "@material-ui/icons/RefreshRounded";

const Record = (props) => {
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

        <div id="ranking"></div>
      </div>
    </div>
  );
};
export default Record;
