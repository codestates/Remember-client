import React, { useState } from "react";

function SignUp() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="navbar__body">
      <button
      className="navbar__signin-btn"
      onClick={() => setIsVisible(true)}
      >
        SignUp
      </button>
      <div className={isVisible? "show": "hide"}>
        <div className="modal__overlay" onClick={() => setIsVisible(false)}></div>
        <div className="modal__content">
          <input
          placeholder="EMAIL"
          ></input>
          <input
          placeholder="PASSWORD"
          ></input>
          <input
          placeholder="NAME"
          ></input>
          <input
          placeholder="DATA OF BIRTH"
          ></input>
          <button>SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp;