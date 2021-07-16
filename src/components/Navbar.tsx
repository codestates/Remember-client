import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import Hamburger from "../pages/Hamburger";
import Notification from "../components/Notification";
import logo from "../images/headerlogo.png";
import { Root } from "../Store";
import SignInModal from "../pages/SignInModal";
import SignUpModal from "../pages/SignUpModal";
import Mypage from "../pages/Mypage";
import * as actionCreators from "../action-creators/loginCreators";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";

const StyledMenu = styled.nav`
  width: 100%;
  height: 0px;
  padding: 0 20px;
  justify-content: space-between;
  position: relative;
  z-index: 3;

  .icon {
    color: #036635;
    padding: 15px 0;
  }
`;

function Navbar({ auth }: any) {
  const token: any = useSelector((state: Root) => state.login);
  const [signUpClick, setSignUpClick] = useState<boolean>(false);
  const [signInClick, setSignInClick] = useState<boolean>(false);
  const [mypageClick, setMypageClick] = useState<boolean>(false);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { logout } = bindActionCreators(actionCreators, dispatch);
  const { notify } = bindActionCreators(notificationCreators, dispatch);

  return (
    <div>
      <Notification />
      <div className="header__box">
        <div className="header__title">
          <Link to="/">
            <img className="header__title-img" src={logo}></img>
          </Link>
          <div className="header__btn">
            {!token.accessToken ? (
              <button
                className="right"
                onClick={() => {
                  if (!modalOn) {
                    setSignUpClick(true);
                    setModalOn(true);
                  }
                }}
              >
                회원가입
              </button>
            ) : (
              <button
                className="right"
                onClick={() => {
                  setMypageClick(true);
                }}
              >
                내정보
              </button>
            )}
            {!token.accessToken ? (
              <button
                className="left"
                onClick={() => {
                  if (!modalOn) {
                    setSignInClick(true);
                    setModalOn(true);
                  }
                }}
              >
                로그인
              </button>
            ) : (
              <button
                className="left"
                onClick={() => {
                  logout();
                  notify("로그아웃 되었습니다.");
                  history.push("/");
                }}
              >
                로그아웃
              </button>
            )}
          </div>
          <SignInModal
            signInClick={signInClick}
            setSignInClick={setSignInClick}
            setModalOn={setModalOn}
            setSignUpClick={setSignUpClick}
            auth={auth}
          />
          <SignUpModal
            signUpClick={signUpClick}
            setSignInClick={setSignInClick}
            setModalOn={setModalOn}
            setSignUpClick={setSignUpClick}
          />
          <Mypage mypageClick={mypageClick} setMypageClick={setMypageClick} />
        </div>
      </div>
      <div
        className="scroll__up"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div>
          <img
            className="scroll__up-img"
            src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ3MnB0IiB2aWV3Qm94PSItMzIgMCA0NzIgNDcyLjIwODkxIiB3aWR0aD0iNDcycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIwOC4wNDY4NzUgNDMyLjIwNzAzMWMtLjUzOTA2My4wMDM5MDctMS4wNzQyMTktLjA0Njg3NS0xLjYwMTU2My0uMTU2MjUtNC4zMzIwMzEtLjg4MjgxMi03LjEyNS01LjExMzI4MS02LjI0MjE4Ny05LjQ0MTQwNmw4LTQwYy40NzY1NjMtMi44ODY3MTkgMi40ODgyODEtNS4yODEyNSA1LjI0NjA5NC02LjI1IDIuNzU3ODEyLS45Njg3NSA1LjgyNDIxOS0uMzU1NDY5IDggMS41OTc2NTYgMi4xNzE4NzUgMS45NTcwMzEgMy4xMDkzNzUgNC45NDE0MDcgMi40Mzc1IDcuNzg5MDYzbC04IDQwYy0uNzM0Mzc1IDMuNzUtNC4wMTk1MzEgNi40NTcwMzEtNy44Mzk4NDQgNi40NjA5Mzd6bTAgMCIgZmlsbD0iI2NkY2RjZCIvPjxwYXRoIGQ9Im0xNzYuMDQ2ODc1IDQzMi4yMDcwMzFjLTMuODAwNzgxIDAtNy4wNzQyMTktMi42NzU3ODEtNy44MzIwMzEtNi4zOTg0MzdsLTgtNDBjLS43MDMxMjUtNC4yNTM5MDYgMi4wOTc2NTYtOC4yOTY4NzUgNi4zMjQyMTgtOS4xNDA2MjUgNC4yMjY1NjMtLjg0NzY1NyA4LjM2MzI4MiAxLjgwODU5MyA5LjM1NTQ2OSA2LjAwMzkwNmw4IDQwYy44NDM3NSA0LjMxMjUtMS45NDUzMTIgOC40OTYwOTQtNi4yNSA5LjM3ODkwNi0uNTI3MzQzLjEwOTM3NS0xLjA2MjUuMTYwMTU3LTEuNTk3NjU2LjE1NjI1em0wIDAiIGZpbGw9IiNjZGNkY2QiLz48cGF0aCBkPSJtMzYwLjA0Njg3NSAxNjguMjA3MDMxYy4wOTc2NTYtODAuMTQ0NTMxLTU2LjQzMzU5NC0xNDkuMjAzMTI1LTEzNS4wMTk1MzEtMTY0LjkzNzUtNzguNTg5ODQ0LTE1LjczNDM3NS0xNTcuMzQ3NjU2IDI2LjIzNDM3NS0xODguMTEzMjgyIDEwMC4yNDYwOTQtMzAuNzY1NjI0IDc0LjAwNzgxMy00Ljk2NDg0MyAxNTkuNDQxNDA2IDYxLjYxNzE4OCAyMDQuMDU0Njg3IDMuNzg5MDYyIDIuNDg4MjgyIDcuNDI1NzgxIDUuMTk1MzEzIDEwLjg5ODQzOCA4LjEwOTM3NmwxNy41OTc2NTYgMTUuMDc0MjE4YzE2LjI4MTI1IDEzLjk2NDg0NCAyNy44MjAzMTIgMzIuNjQ0NTMyIDMzLjAxOTUzMSA1My40NTMxMjVoNjRjNS4yMDMxMjUtMjAuODA4NTkzIDE2Ljc1LTM5LjQ4ODI4MSAzMy4wMzkwNjMtNTMuNDQ1MzEybDE3LjY1NjI1LTE1LjEzNjcxOWMzLjQxNDA2Mi0yLjg3NSA2Ljk5NjA5My01LjU0Njg3NSAxMC43MjY1NjItOCA0Ni41OTM3NS0zMS4wOTM3NSA3NC41NzQyMTktODMuNDAyMzQ0IDc0LjU3ODEyNS0xMzkuNDE3OTY5em0wIDAiIGZpbGw9IiNmYmQ2OTkiLz48cGF0aCBkPSJtMjAwLjA0Njg3NSA0NzIuMjA3MDMxaC0xNmMtMTMuMjU3ODEzIDAtMjQtMTAuNzQyMTg3LTI0LTI0di0yNGMwLTQuNDE3OTY5IDMuNTc4MTI1LTggOC04aDQ4YzQuNDE3OTY5IDAgOCAzLjU4MjAzMSA4IDh2MjRjMCAxMy4yNTc4MTMtMTAuNzQ2MDk0IDI0LTI0IDI0em0wIDAiIGZpbGw9IiM5ODU3MTMiLz48cGF0aCBkPSJtNjQuMDQ2ODc1IDQwMC42MDkzNzVjMC0uMTM2NzE5LjAzOTA2My0uMjY1NjI1LjAzOTA2My0uNDAyMzQ0IDAtMTMuMjUzOTA2LTEwLjc0NjA5NC0yNC0yNC0yNC0xMy4yNTM5MDcgMC0yNCAxMC43NDYwOTQtMjQgMjQgMCAuMTM2NzE5LjAzOTA2Mi4yNjU2MjUuMDM5MDYyLjQwMjM0NC0xMC4wNTQ2ODggMi4wMzkwNjMtMTYuOTMzNTk0IDExLjM1OTM3NS0xNS45MjE4NzUgMjEuNTcwMzEzIDEuMDA3ODEzIDEwLjIxMDkzNyA5LjU4MjAzMSAxOCAxOS44NDM3NSAxOC4wMjczNDNoNDBjMTAuMjczNDM3LjAxMTcxOSAxOC44ODI4MTMtNy43NjU2MjUgMTkuOTE3OTY5LTE3Ljk4ODI4MSAxLjAzMTI1LTEwLjIyMjY1Ni01Ljg1MTU2My0xOS41NjY0MDYtMTUuOTE3OTY5LTIxLjYwOTM3NXptMCAwIiBmaWxsPSIjYjJlMmU2Ii8+PHBhdGggZD0ibTM4OC4wNDY4NzUgMzUyLjIwNzAzMWgtMTJ2LThjMC0xMy4yNTM5MDYtMTAuNzQ2MDk0LTI0LTI0LTI0LTEzLjI1NzgxMyAwLTI0IDEwLjc0NjA5NC0yNCAyNHY4aC0xMmMtMTEuMDQ2ODc1IDAtMjAgOC45NTcwMzEtMjAgMjAgMCAxMS4wNDY4NzUgOC45NTMxMjUgMjAgMjAgMjBoNzJjMTEuMDQyOTY5IDAgMjAtOC45NTMxMjUgMjAtMjAgMC0xMS4wNDI5NjktOC45NTcwMzEtMjAtMjAtMjB6bTAgMCIgZmlsbD0iI2I4ZWFlZSIvPjxwYXRoIGQ9Im0xOTQuMDQ2ODc1LjI2NTYyNXYzODMuOTQxNDA2aDMwYzUuMjAzMTI1LTIwLjgwODU5MyAxNi43NS0zOS40ODgyODEgMzMuMDM5MDYzLTUzLjQ0NTMxMmwxNy42NTYyNS0xNS4xMzY3MTljMy40MTQwNjItMi44NzUgNi45OTYwOTMtNS41NDY4NzUgMTAuNzI2NTYyLTggNjEuMTc5Njg4LTQwLjg4NjcxOSA4OC41ODk4NDQtMTE2Ljg1OTM3NSA2Ny42MDkzNzUtMTg3LjM4NjcxOS0yMC45NzY1NjMtNzAuNTMxMjUtODUuNDUzMTI1LTExOS4xNzE4NzUtMTU5LjAzMTI1LTExOS45NzI2NTZ6bTAgMCIgZmlsbD0iI2FhZTVjOCIvPjxwYXRoIGQ9Im0xODIuODM1OTM4LjQ1NzAzMS0zMSA1OS43NWMtMzAuMzA0Njg4IDU4LjM3ODkwNy0zMy40MjE4NzYgMTI3LjEyMTA5NC04LjUyNzM0NCAxODhsMTYuMDU0Njg3IDM5LjIwMzEyNWMxMS4wMTk1MzEgMjYuOTI5Njg4IDE2LjY4NzUgNTUuNzUgMTYuNjgzNTk0IDg0Ljg0NzY1NnYxMS45NDkyMTloMzJ2LTExLjk0OTIxOWMwLTI5LjA4MjAzMSA1LjY2NDA2My01Ny44ODY3MTggMTYuNjc5Njg3LTg0LjgwMDc4MWwxNy45MTc5NjktNDMuODAwNzgxYzIzLjgyODEyNS01OC4yNDYwOTQgMjIuMDU0Njg4LTEyMy44MjgxMjUtNC44ODY3MTktMTgwLjcwMzEyNWwtMjkuNzEwOTM3LTYyLjc0NjA5NHptMCAwIiBmaWxsPSIjZmZiMWI1Ii8+PC9zdmc+"
          />
        </div>
        <div className="scroll__up-text">맨위로</div>
      </div>
      <StyledMenu>
        <Hamburger auth={auth} />
      </StyledMenu>
    </div>
  );
}

export default Navbar;
