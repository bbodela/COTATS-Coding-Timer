import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
	width: 100%;
	height: 55px;
	border-bottom: 2px solid #f1f1f1;
	padding: 0 20px;
	justify-content: space-between;
	padding: ${(props) => props.logo || "15px 0"};
`;

// background: #7a7cff;
// display: table;
// table-layout: fixed;

// text-align: center;
// text-decoration: none;
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
			<Nav>
				<div logo>
					<Link to="/">logo자리</Link>
				</div>
				<div>
					<Link to="/user/signin">로그인</Link>
					<Link to="/user/signup">회원가입</Link>
				</div>
			</Nav>
		);
	}
}

export default Header;
