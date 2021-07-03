import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import GithubLogin from './GithubLogin';
import GoogleLoginPage from './GoogleLoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action-creators/loginCreators';
import { Root } from "../Store";

import dotenv from "dotenv";
dotenv.config();

const Ul = styled.ul<{ open: boolean }>`
  z-index: 2;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  div {
    padding: 100px 10px 60px 10px;
    background-color: #d7ccc8;
  }
  li {
    padding: 18px 20px;
    cursor: pointer;
    border-bottom: 1px solid #725b53;
    color: #260e04;
  }
  button {
    padding: 10px;
    width: 100px;
    border-radius: 20px;
    margin: 0 20px;
    cursor: pointer;
  }
  .left {
    background-color: black;
    color: white;
    border: none;
  }
  .right {
    background-color: gray;
    border: none;
    color: white;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  @media {
    flex-flow: column nowrap;
    background-color: #a69b97;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;

    transition: transform 0.3s ease-in-out;
  }
`;
type Props = {
  open: boolean;
  setOpen:any;
  auth: any;
};

const OpenNav = ({ open, setOpen , auth }:Props) => {
  const token:any = useSelector((state: Root) => state.login);
  const [signUpClick, setSignUpClick] = useState<boolean>(false);
  const [signInClick, setSignInClick] = useState<boolean>(false);
  const [modalOn, setModalOn] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { logout } =bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div >
      <Ul open={open}>
        <div>
        {!token.accessToken ?
          <button className="left" onClick={() => {
          if(!modalOn) {
          setSignInClick(true);
          setModalOn(true);
          setOpen(false);
          }
        }}>로그인</button>
        :<button className="left" onClick={() => {
          logout();
          // auth.logout()
          setOpen(false)
        }}>로그아웃</button>}
        {!token.accessToken ?
        <button className="right" onClick={() => {
          if(!modalOn) {
          setSignUpClick(true);
          setModalOn(true);
          setOpen(false)
          }
        }}>회원가입</button>
        :<button className="right">
        <Link to="/mypage" onClick={() => setOpen(false)}>내정보</Link>
      </button>}
        </div>
        <li>게시물</li>
        <li>후원하기</li>
      </Ul>

      <div className={signInClick? "show": "hide"}>
        <div className="modal__overlay" onClick={() => {
          setSignInClick(false);
          setModalOn(false);
        }}></div>
        <div className="modal__content">
          <h1>Remember</h1>
          <h3>로그인</h3>
          <div>
            <input
            placeholder="EMAIL"
            ></input>
          </div>
          <div>
            <input
            placeholder="PASSWORD"
            ></input>
          </div>
          <button>로그인</button>
          <div className="modal__content-switch">계정이 없으신가요?
          <span onClick={() => {
            setSignInClick(false);
            setModalOn(false);
            setSignUpClick(true);
            setModalOn(true);
            setOpen(false);
          }}>회원가입</span>
          </div>
          <GithubLogin auth={auth} setSignInClick={setSignInClick} setModalOn={setModalOn}/>
          <GoogleLoginPage auth={auth} setSignInClick={setSignInClick} setModalOn={setModalOn}/>
        </div>
      </div>

      <div className={signUpClick? "show": "hide"}>
        <div className="modal__overlay" onClick={() => {
          setSignUpClick(false);
          setModalOn(false);
        }}></div>
        <div className="modal__content">
        <h1>Remember</h1>
          <h3>회원가입</h3>
          <div>
          <input
          placeholder="EMAIL"
          ></input>
          </div>
          <div>
          <input
          placeholder="PASSWORD"
          ></input>
          </div>
          <div>
          <input
          placeholder="NAME"
          ></input>
          </div>
          <div>
          <input
          placeholder="DATE OF BIRTH"
          ></input>
          </div>
          <button>회원가입</button>
          <div className="modal__content-switch">이미 가입하셨나요?
          <span onClick={() => {
            setSignUpClick(false);
            setModalOn(false);
            setSignInClick(true);
            setModalOn(true);
            setOpen(false);
          }}>로그인</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default OpenNav;