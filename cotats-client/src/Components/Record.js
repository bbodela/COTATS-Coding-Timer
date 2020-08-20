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
			<div className="hamburgerMenuSide">
				<Dialog
					open={props.open}
					aria-labelledby="dialog-title"
					refresh={props.refresh}
				>
					<DialogTitle id="dialog-title">Ranking....</DialogTitle>
				</Dialog>
				//
				<Button>
					<CloseRoundedIcon
						fontSize="large"
						onClick={props.open}
						style={{
							color: "white",
						}}
					/>
				</Button>
				<Button>
					<RefreshRoundedIcon
						style={{
							color: "white",
						}}
						className="refresh"
						fontSize="large"
						onClick={props.refresh}
					/>
				</Button>
				<div id="rankingtable"></div>
			</div>
		</div>
	);
};

const SList = styled.div`
	position: absolute;
	right: 30px;
`;

export default Record;
