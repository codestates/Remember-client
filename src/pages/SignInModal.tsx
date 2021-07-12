import axios from 'axios';
import React, { useState, useEffect } from 'react';
import GithubLogin from './GithubLogin';
import GoogleLoginPage from './GoogleLoginPage';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";
import * as actionCreators from '../action-creators/loginCreators';
import * as spinnerCreators from '../action-creators/spinnerCreators';
import './Modal.css';
import Spinner from "./Spinner";
import { Root } from "../Store";

interface Props {
  signInClick: boolean;
  setSignInClick: Function;
  setModalOn: Function;
  setSignUpClick: Function;
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
  auth 
}:Props) => {
  const dispatch = useDispatch();
  const token:any = useSelector((state: Root) => state.login);
  const loading:any = useSelector((state: Root) => state.spinner);
  const { notify } = bindActionCreators(
    notificationCreators,
    dispatch
  )
  const { setToken } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { loadingStart, loadingEnd } = bindActionCreators(
    spinnerCreators,
    dispatch
  )

  const [values, setValues] = useState<Values>({
    email: "",
    password: ""
  })

  const loginHandler = async () => {
    try {
      
      if(!values.email || !values.password) {
        notify("모든 항목은 필수입니다.")
      } else if(!values.email.includes("@") || !values.email.includes(".")) {
        notify("올바르지 않은 이메일 형식입니다.")
      }
      else {
        await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
          email: values.email, password: values.password
        })
        .then((res) => {
          setToken(res.data.data.accessToken);
          toMainPage();
        })
      }
      
    } catch (error) {
      notify("올바르지 않은 정보입니다.")
    }
  }

  const toMainPage = ():void => {
    setValues({email: "", password: ""})
    setSignInClick(false);
    setModalOn(false);
    notify("로그인 되었습니다.")
    //window.location.replace(window.location.pathname)
  }

  useEffect(() => {
    loadingStart(false);
  }, [])

  return loading.loading ? (
    <Spinner></Spinner>
  ) : (
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
          }}>회원가입</span>
          </div>
          <GithubLogin auth={auth} setSignInClick={setSignInClick} setModalOn={setModalOn} notify={notify}/>
          <GoogleLoginPage auth={auth} setSignInClick={setSignInClick} setModalOn={setModalOn} notify={notify}/>
        </div>
      </div>
  )
}

export default SignInModal
