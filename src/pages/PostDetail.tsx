import React, { useState, useEffect } from 'react';
import './PostDetail.css';
import KakaoShareButton from './KakaoShareButton';
import Facebook from "./Facebook";
import axios from 'axios';
import { Root } from "../Store";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";
import { useTypedSelector } from "../hook/useTypedSelector";
import { useActionDispatch } from "../hook/useActionDispatch";

interface Values {
  name: string,
  url: string
}

interface PostDetailParams {
  id: string;
}

function PostDetail() {
  const params = useParams<PostDetailParams>();
  const history = useHistory();

  const accidentState = useTypedSelector((state) => state.accident);
  const { fetchSingleData } = useActionDispatch();
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(
    notificationCreators,
    dispatch
  )
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);
  const [values, setValues] = useState<Values>({
    name: "",
    url: "",
  })
  const token:any = useSelector((state: Root) => state.login);

  const writeHandler = () => {
    if(values.name && values.url) {
      sendComment();
      setComment("");
      notify("새로고침 후 확인 가능합니다.")
    } else {
      notify("로그인이 필요합니다.")
    }
    
  }

  const sendComment = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/comment`, {
      name: values.name, comment:comment, title:"제목", url: values.url
    })
    
  }

  const getUserInfo = async () => {
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
        const { name, url } = res.data.data.userInfo;
        setValues({...values, name: name, url: url});
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
        const { name, url } = res.data.data.userInfo;
        setValues({...values, name: name, url: url});
      })
    }
  }

  const getComment = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/comment-list`, {
      title: "제목"
    })
    .then((res) => {
      const arr = res.data.data.commentInfo.reverse()
      setComments(arr);
    })
  }

  useEffect(() => {
    getUserInfo();
    getComment();
    fetchSingleData(params.id);
  }, [])
  
return accidentState.loading ? (
    <img src="../images/spinner.gif" alt="" className="postdetail__img " />
  ) : (
    <div>
      <div className="postdetail__main-box">
        <div>
          <div className="postdetail__image">
            <img src={accidentState.accidentSingle?.data.url} alt="" />
          </div>
          <div className="postdetail__image-title">
            {accidentState.accidentSingle?.data.title}
          </div>
        </div>

        <div className="postdetail__side">
          <div className="postdetail__side-title">
            {accidentState.accidentSingle?.data.location}
          </div>
          <div className="postdetail__side-bar">Image Bar</div>
          <button
            className="postdetail__side-support"
            onClick={() => history.push("/accident")}
          >
            뒤로가기
          </button>
          <button className="postdetail__side-support">후원하기</button>
          <KakaoShareButton />
          <Facebook/>
        </div>
      </div>
        <div >
          {accidentState.accidentSingle?.data.body}
        </div>
        <div className="postdetail__comment">
            <div className="postdetail__content-box">
              <img className="postdetail__content-profile" src={values.url ? values.url : "https://image.flaticon.com/icons/png/512/64/64572.png"}></img>
              <div className="postdetail__content-name">{values.name ? values.name : "비회원"}</div>
              <input 
              placeholder="댓글내용"
              value={comment}
              onChange={(e) => {
                if(values.name) {
                  setComment(e.target.value)
                } else {
                  return;
                }
              }}
              ></input>
             <div className="postdetail__content-btn" onClick={() => {
                writeHandler()
                //window.location.replace('/postdetail')
              }}>댓글쓰기</div>
            </div>
          </div>
          {comments.map((el:any) => (
            <div className="postdetail__content-container" key={el.id}>
              <div className="postdetail__content-box">
                <img className="postdetail__content-profile" src={el.url}></img>
                <div className="postdetail__content-name">{el.user_name}</div>
              </div>
              <div className="postdetail__content-body">{el.comment}</div>
            </div>
          ))}
        
    </div>
  );
}

export default PostDetail;
