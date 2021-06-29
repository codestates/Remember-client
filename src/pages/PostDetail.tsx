import React from 'react';
import './PostDetail.css';

function PostDetail() {
  
  return (
    <div>
      <div className="postdetail__main-box">
        <div>
          <div className="postdetail__image">이미지</div>
          <div className="postdetail__image-title">제목</div>
        </div>

        <div className="postdetail__side">
          <div className="postdetail__side-title">Text</div>
          <div className="postdetail__side-bar">Image Bar</div>
          <button className="postdetail__side-support">후원하기</button>
          <button className="postdetail__side-share">공유하기</button>
        </div>
      </div>
      <div className="postdetail__content-box">
        <div className="postdetail__content">내용</div>
      </div>
    </div>
  )
}

export default PostDetail;