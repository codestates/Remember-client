import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import Hamburger from "../pages/Hamburger";
import Notification from "../components/Notification";
import logo from "../images/headerlogo.png";
import { Root } from "../Store";
import SignInModal from '../pages/SignInModal';
import SignUpModal from '../pages/SignUpModal';
import Mypage from "../pages/Mypage";
import * as actionCreators from '../action-creators/loginCreators';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as notificationCreators from "../action-creators/notificationCreators";

const StyledMenu = styled.nav`
  width: 100%;
  height: 0px;
  padding: 0 20px;

  justify-content: space-between;
  /* 변경 사항 */
  position: relative;
  z-index: 3;

  .icon {
    color: #036635;
    padding: 15px 0;
  }
`;

function Navbar({ auth }: any) {
  const token:any = useSelector((state: Root) => state.login);
  const [signUpClick, setSignUpClick] = useState<boolean>(false);
  const [signInClick, setSignInClick] = useState<boolean>(false);
  const [mypageClick , setMypageClick] = useState<boolean>(false);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { logout } =bindActionCreators(
    actionCreators,
    dispatch
  );
  const { notify } = bindActionCreators(
    notificationCreators,
    dispatch
  )

  return (
    <div>
      <Notification />
      <div className="header__box">
        <div className="header__title">
          <Link to="/">
            <img className="header__title-img" src={logo}></img>
          </Link>
          <div className="header__btn">
            {!token.accessToken ?
            <button className="right" onClick={() => {
              if(!modalOn) {
              setSignUpClick(true);
              setModalOn(true);
              }
            }}>회원가입</button>
            :<button className="right"
            onClick={() => {
              setMypageClick(true);
            }}>내정보
            </button>}
            {!token.accessToken ?
            <button className="left" onClick={() => {
            if(!modalOn) {
            setSignInClick(true);
            setModalOn(true);
            }
            }}>로그인</button>
            :<button className="left" onClick={() => {
              logout();
              notify("로그아웃 되었습니다.");
              history.push('/');
            }}>로그아웃</button>}
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
      <Mypage
      mypageClick={mypageClick}
      setMypageClick={setMypageClick}
      />
        </div>
      </div>
      
      <StyledMenu>
        <Hamburger auth={auth} />
      </StyledMenu>
    </div>
  );
}

export default Navbar;
