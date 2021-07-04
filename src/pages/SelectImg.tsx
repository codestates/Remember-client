import React, { useState } from 'react'

interface Props {
  setImgUrl: Function;
  imgUrl: string;
}

const SelectImg = ( { setImgUrl, imgUrl }:Props ) => {
  const [imgClick, setImgClick] = useState<boolean>(false);

  return (
    <div className="modal__content-img-div">
      <div>
      <img className="imgimg" src={imgUrl}></img>
      </div>
      <div>
      <button onClick={() => setImgClick(true)}>프로필 사진</button>
      </div>
      <div className={imgClick? "show": "hide"}>
        <div className="modal__content-img">
        
          <img alt="img" src="https://image.flaticon.com/icons/png/512/328/328287.png"></img>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/350/350411.png"></img>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/1716/1716037.png"></img>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/1716/1716088.png"></img>
          <div>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/328/328287.png");
            }}/>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/350/350411.png");
            }}/>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/1716/1716037.png");
            }}/>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/1716/1716088.png");
            }}/>
          </div>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/4978/4978597.png"></img>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/4978/4978491.png"></img>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/5036/5036315.png"></img>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/1716/1716107.png"></img>
          <div>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/4978/4978597.png");
            }}/>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/4978/4978491.png");
            }}/>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/5036/5036315.png");
            }}/>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/1716/1716107.png");
            }}/>
          </div>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/4978/4978822.png"></img>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/4978/4978307.png"></img>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/4978/4978287.png"></img>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/1716/1716115.png"></img>
          <div>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/4978/4978822.png");
            }}/>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/4978/4978307.png");
            }}/>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/4978/4978287.png");
            }}/>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/1716/1716115.png");
            }}/>
          </div>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/477/477175.png"></img>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/528/528079.png"></img>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/843/843297.png"></img>
          <img alt="img" src="https://image.flaticon.com/icons/png/512/1016/1016355.png"></img>
          <div>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/477/477175.png");
            }}/>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/528/528079.png");
            }}/>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/843/843297.png");
            }}/>
            <input type="radio" name="radio" onClick={() => {
              setImgUrl("https://image.flaticon.com/icons/png/512/1016/1016355.png");
            }}/>
          </div>
          
          <button onClick={() => {
            setImgClick(false);
            setImgUrl("https://image.flaticon.com/icons/png/512/64/64572.png");
          }}>취소</button>
          <button onClick={() => {
            setImgClick(false);
          }}>선택완료</button> 
        </div>
      </div>
    </div>
  )
}

export default SelectImg
