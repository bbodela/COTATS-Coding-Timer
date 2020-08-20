import React from "react";
import Record from "./Record";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import styled from "styled-components";

function Hamburger(props) {
	return (
		<SList>
			{props.status === true ? (
				<Record
					open={props.open}
					refresh={props.refresh}
					weekly={props.weekly}
					monthly={props.monthly}
				/>
			) : (
				""
			)}
			{props.status === false ? (
				<Button>
					<MenuIcon
						className="openBtn"
						fontSize="large"
						onClick={props.close}
						style={{
							color: "white",
							fontSize: 35,
						}}
					/>
				</Button>
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
