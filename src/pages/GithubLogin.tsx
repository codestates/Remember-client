import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action-creators/loginCreators';
import { Root } from "../Store";

type Props = {
  auth: any;
  setSignInClick: any;
  setModalOn:any;
}

const GithubLogin = ({auth, setSignInClick, setModalOn}:Props) => {
  const dispatch = useDispatch();
  const { setToken } =bindActionCreators(
    actionCreators,
    dispatch
  );

  const token = useSelector((state: Root) => state.login);

  const socialLoginHandler = (social = "Github") => {
    auth
      .login(social)
      .then((data:any) => {
        setToken(data.credential.accessToken);
        toMainPage();
      });
  }

  const toMainPage = ():void => {
    console.log(token);
    setSignInClick(false);
    setModalOn(false);
    //window.location.replace("/");
  }

  return (
    <div className="github__box">
      <img className="social__logo" alt="logo" src="https://image.flaticon.com/icons/png/512/25/25231.png"/>
      <div
        onClick={() => socialLoginHandler()}
        className="github__login-btn"
      >깃허브 아이디로 로그인</div>
    </div>
  )
}

export default GithubLogin
