// import React from "react";
// import { Button } from "@material-ui/core";
// import RefreshRoundedIcon from "@material-ui/icons/RefreshRounded";
// import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
// import {
// 	Dialog,
// 	DialogActions,
// 	DialogContent,
// 	DialogTitle,
// 	TextField,
// 	makeStyles,
// } from "@material-ui/core";
// import styled from "styled-components";

// // 랭킹테이블 (기본값(get현재랭킹), 주간랭킹, 월간랭킹)
// const Record = (props) => {
// 	return (
// 		<div>
// 			<div className="hamburgerMenuSide">
// 				<Dialog
// 					open={props.open}
// 					aria-labelledby="dialog-title"
// 					refresh={props.refresh}
// 				>
// 					<CloseRoundedIcon
// 						fontSize="large"
// 						onClick={props.open}
// 						style={{
// 							color: "black",
// 							cursor: "pointer",
// 						}}
// 					/>
// 					<Button>
// 						{/* 새로고침버튼 */}
// 						<RefreshRoundedIcon
// 							style={{
// 								color: "black",
// 							}}
// 							className="refresh"
// 							fontSize="large"
// 							onClick={props.refresh}
// 						/>
// 					</Button>
// 					<DialogTitle id="dialog-title">
// 						<Button
// 							style={{
// 								color: "black",
// 							}}
// 							className="weekly"
// 							onClick={props.weekly}
// 						>
// 							weekly
// 						</Button>
// 						<Button
// 							style={{
// 								color: "black",
// 							}}
// 							className="monthly"
// 							onClick={props.monthly}
// 						>
// 							monthly
// 						</Button>
// 					</DialogTitle>
// 					<div id="rankingtable"></div>
// 				</Dialog>
// 				//
// 			</div>
// 		</div>
// 	);
// };

// const SList = styled.div`
// 	position: absolute;
// 	right: 30px;
// `;

// export default Record;
