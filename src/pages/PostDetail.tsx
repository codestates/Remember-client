import React, { useEffect } from "react";
import "./PostDetail.css";
import KakaoShareButton from "./KakaoShareButton";
import Facebook from "./Facebook";
import { useTypedSelector } from "../hook/useTypedSelector";
import { useActionDispatch } from "../hook/useActionDispatch";
import { useHistory, useParams } from "react-router-dom";

interface PostDetailParams {
  id: string;
}

function PostDetail() {
  const params = useParams<PostDetailParams>();
  const history = useHistory();

  const accidentState = useTypedSelector((state) => state.accident);
  const { fetchSingleData } = useActionDispatch();

  useEffect(() => {
    fetchSingleData(params.id);
  }, []);

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
          <Facebook />
          {/* <button className="postdetail__side-share">공유하기</button> */}
        </div>
      </div>
      <div className="postdetail__content-box">
        <div className="postdetail__content">
          {accidentState.accidentSingle?.data.body}
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
