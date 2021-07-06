import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Mypage.css';
import SelectImg from './SelectImg';
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";
import { Root } from "../Store";
import axios from 'axios';

interface Values {
  email: string;
  password: string;
  name: string;
  mobile: any;
  dateOfBirth: string;
}

const Mypage = () => {
  const token:any = useSelector((state: Root) => state.login);
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(
    notificationCreators,
    dispatch
  )
  const [isOauth, setIsOauth] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
    name: "",
    mobile: {
      head: "",
      body: "",
      tail: ""
    },
    dateOfBirth: ""
  })
  
  const saveCheck = () => {
    if( window.confirm("저장하시겠습니까?")) {
      userInfoUpdate();
    } else {
      return false;
    }
  };

  const userInfoUpdate = async() => {
    const email = values.email;
    const password = values.password;
    const mobile = `${values.mobile.head}-${values.mobile.body}-${values.mobile.tail}`;
    const dateOfBirth = values.dateOfBirth;
    notify("저장 되었습니다.");
    await axios.put(`${process.env.REACT_APP_API_URL}/update-user`, {
        email:email,
        password:password,
        mobile:mobile,
        dateOfBirth:dateOfBirth
    })
    .then(() => {
      userInfoHandler();
    })
      
  }

  const saveHandler = () => {
    if(!values.email || !values.password || !values.mobile || !values.dateOfBirth) {
      notify("모든 항목은 필수입니다.")
    } 
    else if(
      values.mobile.head.length !== 3 ||
      values.mobile.body.length !== 4 ||
      values.mobile.tail.length !== 4
    ) {
      notify("전화번호 길이는 11자리입니다.")
    }
    else if(!values.email.includes("@") || !values.email.includes(".") || values.email[values.email.length -1] === ".") {
      notify("이메일 형식이 잘못되었습니다.")
    }
    else {
      saveCheck();
    }
  }

  const userInfoHandler = async() => {
    if(token.OAuth.OAuth) {
      await axios.post(`${process.env.REACT_APP_API_URL}/mypage`, {
        email: token.OAuth.email, name:token.OAuth.name, OAuth:token.OAuth.OAuth
      },
      {
        headers: {
        authorization: `Bearer ${token.accessToken}`,
        "Content-Type": "application/json"
        },
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data.data.userInfo)
        const { email, password, name, mobile, dateOfBirth, OAuth, url } = res.data.data.userInfo;
        if(OAuth) {
          setIsOauth(true);
        } else {
          setValues({...values, email:email, password: password, name: name, mobile: {
            head:mobile.slice(0,3),
            body:mobile.slice(4,8),
            tail:mobile.slice(9)
          }, dateOfBirth: dateOfBirth})
          setImgUrl(url);
        }
      })
    } else {
      await axios.get(`${process.env.REACT_APP_API_URL}/mypage`, {
        headers: {
        authorization: `Bearer ${token.accessToken}`,
        "Content-Type": "application/json"
        },
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data.data.userInfo)
        const { email, password, name, mobile, dateOfBirth, OAuth, url } = res.data.data.userInfo;
        if(OAuth) {
          setIsOauth(true);
        } else {
          setValues({...values, email:email, password: password, name: name, mobile: {
            head:mobile.slice(0,3),
            body:mobile.slice(4,8),
            tail:mobile.slice(9)
          }, dateOfBirth: dateOfBirth})
          setImgUrl(url);
        }
      })
    }
  }

  useEffect(() => {
    userInfoHandler()
  }, [])

  return (
    <div>
      <div className="mypage__main-box">
        <div>
          <div className="mypage__image">
            <SelectImg setImgUrl={setImgUrl} imgUrl={imgUrl}/>
          </div>
        </div>

        <div className="mypage__side mobile-font">
          <h1>내정보</h1>
          <input
            readOnly
            className="mypage__side-input" 
            placeholder="EMAIL" 
            value={values.email}
            onClick={() => notify("읽기 전용입니다.")}
          />
          <input
            className="mypage__side-input" 
            placeholder="PASSWORD"
            type="password"
            value={values.password}
            onChange={(e) => {
              if(isOauth) {
                notify("일반회원 전용입니다.")
              } else {
                setValues({...values, password:e.target.value})
              }
            }}/>
          <input 
            readOnly
            className="mypage__side-input" 
            placeholder="NAME"
            value={values.name}
            onClick={() => notify("읽기 전용입니다.")}
            />
          <input 
            className="mypage__side-input-mobile-head" 
            placeholder="MOBILE"
            type="number"
            value={values.mobile.head}
            onChange={(e) => {
              if(e.target.value.length > 3) {
                e.target.value = e.target.value.slice(0, 4)
                console.log(values.mobile.head)
              } else {
                setValues({...values, mobile: {
                  head: e.target.value,
                  body: values.mobile.body,
                  tail: values.mobile.tail
                }})
              }
            }}/>-
            <input 
            className="mypage__side-input-mobile-bodytail" 
            placeholder="MOBILE"
            type="number"

            value={values.mobile.body}
            onChange={(e) => {
              if(e.target.value.length > 4) {
                e.target.value = e.target.value.slice(0, 5)
              } else {
                setValues({...values, mobile: {
                  head: values.mobile.head,
                  body: e.target.value,
                  tail: values.mobile.tail
                }})
              }
            }}/>-
            <input 
            className="mypage__side-input-mobile-bodytail" 
            placeholder="MOBILE"
            type="number"
            value={values.mobile.tail}
            onChange={(e) => {
              if(e.target.value.length > 4) {
                e.target.value = e.target.value.slice(0, 5)
              } else {
                setValues({...values, mobile: {
                  head: values.mobile.head,
                  body: values.mobile.body,
                  tail: e.target.value
                }})
              }
            }}/>
          <input 
            className="mypage__side-input" 
            placeholder="DATE OF BIRTH"
            type="date"
            value={values.dateOfBirth}
            onChange={(e) => setValues({...values, dateOfBirth:e.target.value})}
          />
          <div>
          <button className="mypage__side-save" onClick={saveHandler}>저장</button>
          </div>
        </div>
      </div>
      <div className="mypage__content-box">
        <div className="mypage__content">
          <button className="mypage__receipt">
            <Link to='/receipt'>영수증</Link>
          </button>
          <ul className="mypage__content-list">
            <li className="mypage__content-item"> 후원 리스트</li>
            <li className="mypage__content-item"> 후원 리스트</li>
            <li className="mypage__content-item"> 후원 리스트</li>
            <li className="mypage__content-item"> 후원 리스트</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Mypage;