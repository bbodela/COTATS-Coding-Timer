import React from "react";
function Hamburger(props) {
	return (
		<div className="sideMenu">
			{props.status === true ? (
				<div>
					<button className="closeBtn" onClick={props.open}>
						close
					</button>
					<div className="hamburgerMenuSide">
						햄버거메뉴 오픈~~~~~~~~
						<button>새로고침버튼자리입니다~</button>
						<div>day 자리 입니다~~~~</div>
						<div className="mytime">내가 공부한 시간 자리 입니다~</div>
						<div className="ranking">랭킹 자리 입니다~</div>
					</div>
				</div>
			) : (
				""
			)}
			{props.status === false ? (
				<button className="openBtn" onClick={props.close}>
					open
				</button>
			) : (
				""
			)}
		</div>
	);
}
export default Hamburger;
