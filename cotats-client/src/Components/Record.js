import React from "react";
import { Button } from "@material-ui/core";
import RefreshRoundedIcon from "@material-ui/icons/RefreshRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  makeStyles,
} from "@material-ui/core";
import styled from "styled-components";
const Record = (props) => {
  return (
    <div>
      <hamburgerMenuSide>
        <Dialog
          open={props.open}
          aria-labelledby="dialog-title"
          refresh={props.refresh}>
          <Button>
            <CloseRoundedIcon
              fontSize="large"
              onClick={props.open}
              style={{
                color: "black",
              }}
            />
          </Button>
          <Button>
            <RefreshRoundedIcon
              style={{
                color: "black",
              }}
              className="refresh"
              fontSize="large"
              onClick={props.refresh}
            />
          </Button>
          <Button color="primary" className="weekly" onClick={props.weekly}>
            weekly
          </Button>
          <Button color="primary" className="monthly" onClick={props.monthly}>
            monthly
          </Button>
          <DialogTitle id="dialog-title">Ranking....</DialogTitle>
        </Dialog>
        //
        <div id="rankingtable"></div>
      </hamburgerMenuSide>
    </div>
  );
};
const SList = styled.div`
  position: absolute;
  right: 30px;
`;
const hamburgerMenuSide = styled.span`
  float: right;
  background-color: red;
`;
export default Record;
