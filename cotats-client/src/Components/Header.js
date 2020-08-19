import React from "react";
import styled, { keyframes } from "styled-components";
import { darken, lighten } from "polished";
import { Link, withRouter, Route } from "react-router-dom";
import axios from "axios";
import logo from "../img/logo-test.png";

const Header = (props) => {
  console.log("헤더props", props);
  const logoutHandler = () => {
    axios
      .post("http://3.18.213.157:5000/user/signout")
      .then((res) => {
        console.log("헤더signout버튼클릭 시 res", res);
        // 서버에서 세션파괴해주면 isLogin을 !isLogin으로 바꾸고
        props.logoutChangeHandler();
        props.history.push("/");
        // 서버에 최종 시간 다시한번 저장해야할까요.??????
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginBtnHandler = () => {
    props.history.push("/signin");
  };

  const joinBtnHandler = () => {
    props.history.push("/signup");
  };

  return (
    <>
      {props.isLogin === false ? (
        <HeaderContainer>
          <div className="logo">
            <BlinkingLogo>
              <Anchor to="/">
                <img src={logo} width="120" height="30" alt="logo" />
              </Anchor>
            </BlinkingLogo>
          </div>
          <MenuBtn>
            <Button onClick={() => loginBtnHandler()}>로그인</Button>
            <Button onClick={() => joinBtnHandler()}>회원가입</Button>
          </MenuBtn>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <div className="logo">
            <BlinkingLogo>
              <Anchor to="/">
                {/* <img src={logo} /> */}
                logo자리
              </Anchor>
            </BlinkingLogo>
          </div>
          <MenuBtn>
            <Button onClick={() => logoutHandler()}>로그아웃</Button>
          </MenuBtn>
        </HeaderContainer>
      )}
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #263343;
  padding: 5px 10px;

  .logo {
    padding: 15px 0 10px 15px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    padding-left: 0;
    padding-right: 0;
  }
`;

const blink = keyframes`
  50% {
		opacity: 0;
	}
`;

const BlinkingLogo = styled.div`
  animation: ${blink} 1s linear infinite;
  text-decoration: none;
`;

const Anchor = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 10px 18px 10px 18px;
  margin: 15px 10px 15px 10px;
  /* 색상 */
  &:hover {
    background: ${darken(0.2, "#FFCD64")};
  }
  &:active {
    background: ${lighten(0.2, "rgba(255,205,100,0.7)")};
  }

  @media screen and (max-width: 600px) {
    padding: 3px 5px 3px 5px;
    margin: 5px 0px 10px 15px;
  }
`;

const MenuBtn = styled.div`
  display: flex;
  padding-left: 0;
  justify-content: right;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: right;
  }
`;

// const List = styled.li`
// 	padding: 10px;
// 	width: 100%;
// 	text-align: center;
// 	list-style: none;

// 	@media screen and (max-width: 600px) {
// 		width: 100%;
// 		text-align: center;

// 		&:hover {
// 			background: ${darken(0.2, "#FFCD64")};
// 		}
// 	}
// `;

export default withRouter(Header);
