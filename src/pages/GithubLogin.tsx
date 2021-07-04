import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action-creators/loginCreators';
import { Root } from "../Store";
import axios from "axios";

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
      .then( (data:any ) => {
        //console.log(data);
        setToken(data.credential.accessToken);
        toMainPage();
        const { email } = data.user.email;
        const { name } = data.user.displayName;
        
        axios.post(`${process.env.REACT_APP_API_URL}/oauth-info`, {
          email: email, name: name
        })
      });
  }

  const toMainPage = ():void => {
    setSignInClick(false);
    setModalOn(false);
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
