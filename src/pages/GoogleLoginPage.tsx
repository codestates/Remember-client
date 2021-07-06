import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action-creators/loginCreators';
import axios from "axios";

interface Props {
  auth: any;
  setSignInClick: Function;
  setModalOn: Function;
  notify: Function
}

const GoogleLoginPage = ({auth, setSignInClick, setModalOn, notify}:Props) => {
  const dispatch = useDispatch();
  const { setToken } =bindActionCreators(
    actionCreators,
    dispatch
  );

  const socialLoginHandler = (social = "Google"):any => {
    try {
    auth
      .login(social)
      .then(async(data:any) => {
        setToken(data.credential.accessToken);
        console.log(data)
        const email = data.user.email;
        const name = data.user.displayName;
        toMainPage();
        await axios.post(`${process.env.REACT_APP_API_URL}/oauth-info`, 
        { email, name,
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png"
        })
      }); 
    } catch (error) {
      console.log(error)
    }
  }

  const toMainPage = ():void => {
    setSignInClick(false);
    setModalOn(false);
    notify("로그인 되었습니다.")
  }

  return (
    <div>
    <div className="google__box">
      <img className="social__logo" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png" />
      <div
        onClick={() => socialLoginHandler()}
        className="google__login-btn"
      >구글 아이디로 로그인</div>
    </div>
    </div>
  )
}

export default GoogleLoginPage;
