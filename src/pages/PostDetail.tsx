import React, { useState, useEffect } from "react";
import "./PostDetail.css";
import KakaoShareButton from "./KakaoShareButton";
import Facebook from "./Facebook";
import axios from "axios";
import { Root } from "../Store";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import { bindActionCreators } from "redux";
import * as notificationCreators from "../action-creators/notificationCreators";
import { useTypedSelector } from "../hook/useTypedSelector";
import { useActionDispatch } from "../hook/useActionDispatch";
import Spinner from "./Spinner";
import styled from "styled-components";
import ProgressBar from 'react-bootstrap/ProgressBar'

interface Values {
  name: string;
  url: string;
}

interface PostDetailParams {
  id: string;
}

interface Donation {
  percentage1: number;
  percentage2: number;
  totalAmount: number;
}

function PostDetail() {
  const params = useParams<PostDetailParams>();
  const history = useHistory();

  const accidentState = useTypedSelector((state) => state.accident);
  const { fetchSingleData } = useActionDispatch();
  const dispatch = useDispatch();
  const { notify } = bindActionCreators(notificationCreators, dispatch);
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);
  const [values, setValues] = useState<Values>({
    name: "",
    url: "",
  });
  const token: any = useSelector((state: Root) => state.login);

  const [likeClick, setLikeClick] = useState<boolean>(false);
  const [donation, setDonation] = useState<Donation>({
    percentage1: 0,
    percentage2: 0,
    totalAmount: 0,
  });

  // const downCount = () => {
  //   if (countState) {
  //     setCount(count - 1);
  //   }
  //   setCountState(false);
  // };

  const writeHandler = () => {
    if (values.name && values.url) {
      sendComment();
      setComment("");
      notify("새로고침 후 확인 가능합니다.");
    } else {
      notify("로그인이 필요합니다.");
    }
  };

  const sendComment = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/comment`, {
      name: values.name,
      comment: comment,
      title: accidentState.accidentSingle?.data.title,
      url: values.url,
    });
  };

  const getUserInfo = async () => {
    if (token.OAuth.OAuth) {
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/mypage`,
          {
            email: token.OAuth.email,
            name: token.OAuth.name,
            OAuth: token.OAuth.OAuth,
          },
          {
            headers: {
              authorization: `Bearer ${token.accessToken}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          const { name, url } = res.data.data.userInfo;
          setValues({ ...values, name: name, url: url });
        });
    } else {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/mypage`, {
          headers: {
            authorization: `Bearer ${token.accessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((res) => {
          const { name, url } = res.data.data.userInfo;
          setValues({ ...values, name: name, url: url });
        });
    }
  };

  const getComment = async () => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/comment-list`, {
        title: accidentState.accidentSingle?.data.title,
      })
      .then((res) => {
        const arr = res.data.data.commentInfo.reverse();
        setComments(arr);
      });
  };

  const getDonorInfo = async () => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/mainpage`, {
        title: accidentState.accidentSingle?.data.title,
      })
      .then((res) => {
        const { percentage, totalAmount } = res.data.data;
        const amount = totalAmount.toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

        if (percentage > 50) {
          
          setDonation({
            ...values,
            percentage1: 50,
            percentage2: percentage - 50,
            totalAmount: amount,
          });
        } else {
          setDonation({
            ...values,
            percentage1: percentage,
            percentage2: 0,
            totalAmount: amount,
          });
        }
      });
  }

  const isLoginHandler = () => {
    if (!token.accessToken) {
      notify("로그인이 필요합니다.");
    } else {
      return true;
    }
  };

  useEffect(() => {
    getUserInfo();
    getComment();
    fetchSingleData(params.id);
    getDonorInfo();
  }, []);

  return accidentState.loading ? (
    <Spinner></Spinner>
  ) : (
    <section id="postdetail">
      <div className="postdetail__row">
        <div className="postdetail__col-1">
          <h1 className="postdetail__title">
            {accidentState.accidentSingle?.data.title}
          </h1>
          <p className="postdetail__text">
            {accidentState.accidentSingle?.data.body} <br></br> <br></br>
            {accidentState.accidentSingle?.data.body}
          </p>
          <h3 className="people__text">
            인명 피해 : {accidentState.accidentSingle?.data.casualty}
          </h3>
          <h3 className="day__text">
            사건 발생일 : {accidentState.accidentSingle?.data.date}
          </h3>
          <h3 className="location__text">
            위치 : {accidentState.accidentSingle?.data.location}
          </h3>
          <div className="postdetail__btn__group">
            <div className="btn__group__area">
              <button
                className="btn__post"
                onClick={() => history.push("/accident")}
              >
                뒤로가기
              </button>
              
            </div>
            <div className="btn__group-sns">
              <KakaoShareButton />
              <Facebook />
            </div>
          </div>
        </div>
        <div className="postdetail__col-2">
          <img
            src={accidentState.accidentSingle?.data.url}
            alt=""
            className="postdetail__img"
          />
        </div>
      </div>

      <div className="postdetail__bottom">
        <div className="postdetail__comment">
          <div className="postdetail__content-box">
            <img
              className="postdetail__content-profile"
              src={
                values.url
                  ? values.url
                  : "https://image.flaticon.com/icons/png/512/64/64572.png"
              }
            ></img>
            <div className="postdetail__content-name">
              {values.name ? values.name : "비회원"}
            </div>
            <input
              placeholder="댓글내용"
              value={comment}
              onChange={(e) => {
                if (values.name) {
                  setComment(e.target.value);
                } else {
                  return;
                }
              }}
            ></input>
            <div
              className="postdetail__content-btn"
              onClick={() => {
                writeHandler();
                //window.location.replace('/postdetail')
              }}
            >
              댓글쓰기
            </div>
          </div>
        </div>
      </div>
      <span className="postdetail__donation">
        <div>
          <h1 className="postdetail__donation-percent">
            {donation?.percentage1 + donation.percentage2}%{" "}
          </h1>
        </div>
        <ProgressBar>
          <ProgressBar variant="success" now={donation?.percentage1} ></ProgressBar>
          <ProgressBar variant="warning" now={donation?.percentage2}></ProgressBar>
        </ProgressBar>
        <div className="postdetail__donation-date">2020.12.31 ~ 2021.12.31까지</div>
        <div className="postdetail__donation-dday">D - 60</div>
        <h1 className="postdetail__donation-amount">{donation?.totalAmount} 원</h1>
        <button
                className="btn__pay"
                onClick={() => {
                  let result = isLoginHandler();
                  if(result) {
                    history.push(`/service/${accidentState.accidentSingle?.data.id}`)
                  }
                }}
              >
                후원하기
              </button>
      </span>
      {comments.map((el: any) => (
        <div className="talk__comment" key={el.id}>
          <div className="talk__box">
            <div className="talk__card">
              <div className="talk__profile">
                <img src={el.url} className="talk__img" alt="" />
                <h3 className="talk__name">{el.user_name}</h3>
                <Like>
                  <span>
                    {/* <div
                      className={likeClick ? "press" : ""}
                      onClick={() => setLikeClick(!likeClick)}
                    >
                      Liked!
                    </div> */}
                    <i
                      className={likeClick ? "press" : "press"}
                      // onClick={() => setLikeClick(!likeClick)}
                    ></i>
                  </span>
                </Like>
              </div>
              <hr className="talk__line" />
              <p className="talk__text">{el.comment}</p>
              <p className="talk__date">{el.createdAt.slice(0, 10)}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PostDetail;

const Like = styled.div`
  font-family: "open sans", sans-serif;
  i {
    // cursor: pointer;
    background: transparent;
    color: #aaa;
    transition: 0.2s;
    position: absolute;
    right: 10%;
    font-size: 20px;
  }

  i:hover {
    color: #666;
  }

  i:before {
    font-family: fontawesome;
    content: "\f004";
    font-style: normal;
  }

  div {
    visibility: hidden;
    color: transparent;
    transition: 0.6s;
    font-size: 10px;
    font-weight: 400;
    position: absolute;
    right: 9%;
    top: 8%;
    text-align: center;
  }

  i.press {
    color: #e23b3b;
  }

  div.press {
    font-size: 12px;
    visibility: visible;
    animation: fade 1s;
  }

  @keyframes fade {
    0% {
      color: transparent;
    }
    50% {
      color: #e23b3b;
    }
    100% {
      color: transparent;
    }
  }
`;