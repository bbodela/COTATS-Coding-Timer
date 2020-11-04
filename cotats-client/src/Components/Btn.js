import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import styled, { createGlobalStyle } from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

const Btn = props => {
	return (
		<div className="Btn">
			{props.status === 0 || props.status === 2 ? (
				<StartButton
					className="start"
					onClick={props.start}
					style={{
						width: 170,
						height: 70,
						color: "grey",
						fontWeight: "bolder",
						fontSize: 20,
					}}
				>
					<b>START</b>
				</StartButton>
			) : (
				""
			)}
			{props.status === 1 ? (
				<Fragment>
					<PauseButton
						className="start"
						onClick={props.pause}
						style={{
							width: 170,
							height: 70,
							color: "grey",
							fontWeight: "bolder",
							fontSize: 20,
							marginRight: 30,
						}}
					>
						<b>PAUSE</b>
					</PauseButton>
					<StopButton
						className="start"
						onClick={props.stop}
						style={{
							width: 170,
							height: 70,
							color: "grey",
							fontWeight: "bolder",
							fontSize: 20,
							marginLeft: 30,
						}}
					>
						<b>STOP</b>
					</StopButton>
				</Fragment>
			) : (
				""
			)}
		</div>
	);
};

export default Btn;

const GlobalStyles = createGlobalStyle`
      body {
        @import url("https://fonts.googleapis.com/css");
        font-family: "Nanum Gothic", sans-serif !important;
      }
    `;
const StartButton = withStyles({
	root: {
		borderRadius: 20,
		border: 0,
		height: 48,
		padding: "0 30px",
		boxShadow: "0 3px 5px 2px rgba(92, 108, 189)",
		fontsize: 50,
		color: lightBlue,
	},
})(Button);

const PauseButton = withStyles({
	root: {
		borderRadius: 20,
		border: 0,
		height: 48,
		padding: "0 30px",
		boxShadow: "0 3px 5px 2px rgba(92, 108, 189)",
		fontsize: 50,
		color: lightBlue,
	},
})(Button);

const StopButton = withStyles({
	root: {
		borderRadius: 20,
		border: 0,
		height: 48,
		padding: "0 30px",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		fontsize: 50,
		color: lightBlue,
	},
})(Button);
