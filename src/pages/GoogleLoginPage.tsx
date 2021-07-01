import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action-creators/loginCreators';
import { Root } from "../Store";

const GoogleLoginPage = ({auth, setSignInClick, setModalOn}:any) => {
  const dispatch = useDispatch();
  const { setToken } =bindActionCreators(
    actionCreators,
    dispatch
  );

  const token = useSelector((state: Root) => state.login);

  const socialLoginHandler = (social = "Google"):void => {
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
    <div>
    <div className="github__box">
      <img className="github__logo" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png" />
      <div
        onClick={() => socialLoginHandler()}
        className="github__login-btn"
      >Log in with GooGle</div>
    </div>
    </div>
  )
}

export default GoogleLoginPage;
