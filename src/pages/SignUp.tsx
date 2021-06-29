import React, { useState } from "react";

function SignUp() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="navbar__body">
      <div
      className="navbar__btn"
      onClick={() => setIsVisible(true)}
      >
        Sign Up
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
          <input
          placeholder="NAME"
          ></input>
          <input
          placeholder="DATE OF BIRTH"
          ></input>
          <button>SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp;