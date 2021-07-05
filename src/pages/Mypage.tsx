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
  const token = useSelector((state: Root) => state.login);
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(
    notificationCreators,
    dispatch
  )

  const [imgUrl, setImgUrl] = useState<string>("https://image.flaticon.com/icons/png/512/64/64572.png");
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
    setValues({email: "", password: "", name: "", mobile: {
    head: "",
    body: "",
    tail: ""
    }, dateOfBirth: ""})
    await axios.put(`${process.env.REACT_APP_API_URL}/update-user`, {
        email:email,
        password:password,
        mobile:mobile,
        dateOfBirth:dateOfBirth
    })
      
  }

  const saveHandler = () => {
    if(!values.email || !values.password || !values.mobile || !values.dateOfBirth) {
      notify("모든 항목은 필수입니다.")
    } 
    else if(!values.email.includes("@") || !values.email.includes(".")) {
      notify("이메일 형식이 잘못되었습니다.")
    }
    else {
      saveCheck();
    }
  }

  const userInfoHandler = async() => {
    await axios.get(`${process.env.REACT_APP_API_URL}/mypage`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    .then((res) => {
      console.log(res)
    })
  }

  useEffect(() => {
    // userInfoHandler()
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
            className="mypage__side-input" 
            placeholder="EMAIL" 
            value={values.email}
            onChange={(e) => setValues({...values, email:e.target.value})}
          />
          <input
            className="mypage__side-input" 
            placeholder="PASSWORD"
            type="password"
            value={values.password}
            onChange={(e) => setValues({...values, password:e.target.value})}
            />
          <input 
            readOnly
            className="mypage__side-input" 
            placeholder="NAME"
            value={values.name}
            onChange={(e) => setValues({...values, name:e.target.value})}
            />
          <input 
            className="mypage__side-input-mobile-head" 
            placeholder="MOBILE"
            type="number"
            value={values.mobile.head}
            onChange={(e) => {
              setValues({...values, mobile: {
                head: e.target.value,
                body: values.mobile.body,
                tail: values.mobile.tail
              }})
            }}/>-
            <input 
            className="mypage__side-input-mobile-bodytail" 
            placeholder="MOBILE"
            type="number"
            value={values.mobile.body}
            onChange={(e) => {
              setValues({...values, mobile: {
                head: values.mobile.head,
                body: e.target.value,
                tail: values.mobile.tail
              }})
            }}/>-
            <input 
            className="mypage__side-input-mobile-bodytail" 
            placeholder="MOBILE"
            type="number"
            value={values.mobile.tail}
            onChange={(e) => {
              setValues({...values, mobile: {
                head: values.mobile.head,
                body: values.mobile.body,
                tail: e.target.value
              }})
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