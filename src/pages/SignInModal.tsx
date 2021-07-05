import axios from 'axios';
import React, { useState } from 'react';
import GithubLogin from './GithubLogin';
import GoogleLoginPage from './GoogleLoginPage';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";
import * as actionCreators from '../action-creators/loginCreators';

interface Props {
  signInClick: boolean;
  setSignInClick: Function;
  setModalOn: Function;
  setSignUpClick: Function;
  setOpen: Function;
  auth: object;
}

interface Values {
  email: string;
  password: string;
}

const SignInModal = ({ 
  signInClick, 
  setSignInClick, 
  setModalOn, 
  setSignUpClick, 
  setOpen, 
  auth 
}:Props) => {
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(
    notificationCreators,
    dispatch
  )
  const { setToken } =bindActionCreators(
    actionCreators,
    dispatch
  );

  const [values, setValues] = useState<Values>({
    email: "",
    password: ""
  })

  const loginHandler = async () => {
    try {
      
      if(!values.email || !values.password) {
        notify("모든 항목은 필수입니다.")
      } else if(!values.email.includes("@") || !values.email.includes(".")) {
        notify("이메일 형식이 잘못되었습니다.")
      }
      else {
        await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
          email: values.email, password: values.password
        })
        .then((res) => {
          console.log(res.data.data.accessToken);
          setToken(res.data.data.accessToken);
          toMainPage();
        })
      }
      
    } catch (error) {
      notify("잘못된 정보입니다.")
    }
  }

  const toMainPage = ():void => {
    setValues({email: "", password: ""})
    setSignInClick(false);
    setModalOn(false);
    notify("로그인 되었습니다.")
  }

  return (
    <div className={signInClick? "show": "hide"}>
        <div className="modal__overlay" onClick={() => {
          setSignInClick(false);
          setModalOn(false);
        }}></div>
        <div className="modal__content">
          <h1>Remember</h1>
          <h3>로그인</h3>
          <div className="modal__content-login-div">
            <input
            className="modal__signin"
            placeholder="EMAIL"
            value={values.email}
            onChange={(e) => setValues({...values, email:e.target.value})}
            ></input>
          </div>
          <div>
            <input
            className="modal__signin"
            placeholder="PASSWORD"
            type="password"
            value={values.password}
            onChange={(e) => setValues({...values, password:e.target.value})}
            ></input>
          </div>
          <button onClick={() => {
            loginHandler();

            }}>로그인</button>
          <div className="modal__content-switch modal__content-switch-login">계정이 없으신가요?
          <span onClick={() => {
            setSignInClick(false);
            setModalOn(false);
            setSignUpClick(true);
            setModalOn(true);
            setOpen(false);
          }}>회원가입</span>
          </div>
          <GithubLogin auth={auth} setSignInClick={setSignInClick} setModalOn={setModalOn} notify={notify}/>
          <GoogleLoginPage auth={auth} setSignInClick={setSignInClick} setModalOn={setModalOn} notify={notify}/>
        </div>
      </div>
  )
}

export default SignInModal
