import React from "react";
import Record from "./Record";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import axios from "axios";

import styled from "styled-components";

function Hamburger(props) {
  const logoutHandler = () => {
    axios
      .post("http://52.79.251.147:5000/user/signout")
      .then((res) => {
        console.log("헤더signout버튼클릭 시 res", res);
        props.logoutChangeHandler();
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SList>
      {props.status === true ? (
        <Record open={props.open} refresh={props.refresh} />
      ) : (
        ""
      )}
      {props.status === false ? (
        <>
          <MenuIcon
            className="openBtn"
            fontSize="large"
            onClick={props.close}
            style={{
              color: "white",
              fontSize: 30,
            }}
          />
          <LogoutAnchor onClick={() => logoutHandler()}>
            <ExitToAppIcon></ExitToAppIcon>
          </LogoutAnchor>
        </>
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
