import React from 'react'
import './Prepare.css';

const Prepare = () => {
  return (
    <div className="prepare__container">
      <div>
        <img className="prepare__img" src="https://image.flaticon.com/icons/png/512/5010/5010140.png"></img>
          <div>
            <span className="prepare__title-bold">서비스 준비중</span>
            <span className="prepare__title">입니다.</span>
          </div>
        <div className="prepare__body-first">보다 나은 서비스 제공을 위하여 페이지 준비중에 있습니다.</div>
        <div className="prepare__body">빠른 시일내에 준비하여 찾아뵙겠습니다.</div>
      </div>
    </div>
  )
}

export default Prepare
