import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import styled, { createGlobalStyle } from "styled-components";

function Btn(props) {
  return (
    <div className="Btn">
      {props.status === 0 || props.status === 2 ? (
        <Button color="primary" className="start" onClick={props.start}>
          start
        </Button>
      ) : (
        ""
      )}
      {props.status === 1 ? (
        <Fragment>
          <Button
            color="primary"
            className="pause"
            href="#text-buttons"
            onClick={props.pause}>
            pause
          </Button>
          <Button onClick={props.stop} color="secondary" className="stop">
            stop
          </Button>
        </Fragment>
      ) : (
        ""
      )}
    </div>
  );
}

export default Btn;
const GlobalStyles = createGlobalStyle`
      body {
        @import url("https://fonts.googleapis.com/css");
        font-family: "Nanum Gothic", sans-serif !important;
      }
    `;
