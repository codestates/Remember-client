import React, { useEffect } from 'react';

const Facebook = () => {

  const onClickFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`)
  }
  
  return (
    <>
      <button className="sns-btn" onClick={() => onClickFacebook()}>
        <img className="sns-img" src="https://image.flaticon.com/icons/png/512/889/889102.png" alt="facebook"/>
      </button>
    </>
  );
}

export default Facebook;