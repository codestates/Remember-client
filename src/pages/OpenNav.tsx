import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import GithubLogin from './GithubLogin';
import GoogleLoginPage from './GoogleLoginPage';
import { useSelector } from 'react-redux';
import { Root } from "../Store";

import dotenv from "dotenv";
dotenv.config();

const Ul = styled.ul<{ open: boolean }>`
  z-index: 2;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    margin-right: 220px;
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  @media {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
type Props = {
  open: boolean;
  auth: any;
};

const OpenNav = ({ open, auth }:Props) => {
  const token = useSelector((state: Root) => state.login);
  const [signUpClick, setSignUpClick] = useState<boolean>(false);
  const [signInClick, setSignInClick] = useState<boolean>(false);
  const [modalOn, setModalOn] = useState<boolean>(false);

  return (
    <div >
      <Ul open={open}>
        <li>게시물</li>
        <li>후원하기</li>
        <li onClick={() => {
          if(token) {
            alert("이미 로그인 되었습니다.");
          }
          else if(!modalOn) {
          setSignInClick(true);
          setModalOn(true);
          }
        }}>로그인</li>
        <li onClick={() => {
          if(!modalOn) {
          setSignUpClick(true);
          setModalOn(true);
          }
        }}>회원가입</li>
        <li>
          <Link to="/mypage">내정보</Link>
        </li>
      </Ul>

      <div className={signInClick? "show": "hide"}>
        <div className="modal__overlay" onClick={() => {
          setSignInClick(false);
          setModalOn(false);
        }}></div>
        <div className="modal__content">
          <input
          placeholder="EMAIL"
          ></input>
          <input
          placeholder="PASSWORD"
          ></input>
          <button>SignIn</button>
          <GithubLogin auth={auth} setSignInClick={setSignInClick}/>
          <GoogleLoginPage auth={auth} setSignInClick={setSignInClick}/>
        </div>
      </div>

      <div className={signUpClick? "show": "hide"}>
        <div className="modal__overlay" onClick={() => {
          setSignUpClick(false);
          setModalOn(false);
        }}></div>
        <div className="modal__content">
          <input
          placeholder="EMAIL"
          ></input>
          <input
          placeholder="PASSWORD"
          ></input>
          <input
          placeholder="NAME"
          ></input>
          <input
          placeholder="DATE OF BIRTH"
          ></input>
          <button>SignUp</button>
        </div>
      </div>

    </div>
  )
}

export default OpenNav;