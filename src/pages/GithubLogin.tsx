import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action-creators/loginCreators';
import { Root } from "../Store";

type Props = {
  auth: any;
  setSignInClick: any;
}

const GithubLogin = ({auth, setSignInClick}:Props) => {
  const dispatch = useDispatch();
  const { setToken, logout } =bindActionCreators(
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
    //window.location.replace("/");
  }

  return (
    <div className="github__box">
      <img className="github__logo" alt="logo" src="https://image.flaticon.com/icons/png/512/25/25231.png" />
      <div
        onClick={() => socialLoginHandler()}
        className="github__login-btn"
      >Log in with Github</div>
    </div>
  )
}

export default GithubLogin
