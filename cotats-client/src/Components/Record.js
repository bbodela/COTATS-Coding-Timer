import React, { useState } from "react";
import { Button } from "@material-ui/core";
import RefreshRoundedIcon from "@material-ui/icons/RefreshRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import {
  Dialog,
  List,
  ListItem,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  makeStyles,
} from "@material-ui/core";
import styled from "styled-components";

function Record(props) {
  // const [listStatus, setListStatus]=useState("refresh")
  // console.log("Record>>>>>", props);
  // console.log(props.open); //상태를 바꾸는

  // const defaultBtn = () => {

  // }

  return (
    <div>
      <div className="hamburgerMenuSide">
        <Dialog
          open={props.open}
          aria-labelledby="dialog-title"
          refresh={() => props.refresh()}>
          <CloseRoundedIcon
            fontSize="large"
            onClick={() => props.open()}
            style={{
              color: "black",
              cursor: "pointer",
            }}
          />
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
          <DialogTitle id="dialog-title">
            <Button
              style={{
                color: "black",
              }}
              className="weekly"
              onClick={props.weekly}>
              weekly
            </Button>
            <Button
              style={{
                color: "black",
              }}
              className="monthly"
              onClick={props.monthly}>
              monthly
            </Button>
          </DialogTitle>
          <List>{/* {받아온 데이터} */}</List>

          <div id="rankingtable"></div>
        </Dialog>
      </div>
    </div>
  );
}

const SList = styled(List)`
  background-color: #212121;
`;

// const SList = styled.div`
// 	position: absolute;
// 	right: 30px;
// `;

export default Record;
