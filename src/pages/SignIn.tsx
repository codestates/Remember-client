import React, { useState } from "react";

function SignIn() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="navbar__body">
      <div
      className="navbar__btn"
      onClick={() => setIsVisible(true)}
      >
        Sign In
      </div>
      <div className={isVisible? "show": "hide"}>
        <div className="modal__overlay" onClick={() => setIsVisible(false)}></div>
        <div className="modal__content">
          <input
          placeholder="EMAIL"
          ></input>
          <input
          placeholder="PASSWORD"
          ></input>
          <button>SignIn</button>
        </div>
      </div>
    </div>
  )
}

export default SignIn;