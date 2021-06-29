import React from 'react';
import './Mypage.css';

const Mypage: React.FC = () => {
  return (
    <div>
      <div className="mypage__main-box">
        <div>
          <div className="mypage__image">이미지</div>
        </div>

        <div className="mypage__side">
          <input className="mypage__side-title" placeholder="EMAIL"></input>
          <input className="mypage__side-title" placeholder="PASSWORD"></input>
          <input className="mypage__side-title" placeholder="NAME"></input>
          <input className="mypage__side-title" placeholder="DATE OF BIRTH"></input>
          {/* <div className="mypage__side-bar">Image Bar</div> */}
          {/* <button className="mypage__side-support"></button> */}
          <div>
          <button className="mypage__side-save">저장</button>
          </div>
        </div>
      </div>
      <div className="mypage__content-box">
        <div className="mypage__content">
          <button className="mypage__receipt">영수증</button>
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