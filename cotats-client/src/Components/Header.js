import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.div`
	background: #7a7cff;
	display: table;
	table-layout: fixed;
	width: 100%;
	text-align: center;
	text-decoration: none;
`;
// const LogoStyle = styled.Link`
// 	background: white;
// 	color: black;
// 	text-align: center;
// 	padding-top: 1rem;
// 	padding-bottom: 1rem;
// 	display: table-cell;
// 	color: white;
// 	text-decoration: none;
// `;

class Header extends Component {
	render() {
		return (
			<HeaderStyle>
				<div>
					<Link to="/">logo자리</Link>

					<Link to="/signin">로그인</Link>
					<Link to="/signup">회원가입</Link>
				</div>
			</HeaderStyle>
		);
	}
}

export default Header;
