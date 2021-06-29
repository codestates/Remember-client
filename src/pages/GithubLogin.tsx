import React from 'react'

const GithubLogin = () => {
  const GITHUB_LOGIN_URL = 'https://github.com/login/oauth/authorize?client_id=43548ce9b4cc72844865'
  
  const socialLoginHandler = () => {
    window.location.assign(GITHUB_LOGIN_URL)
  }
  return (
    <div className="github__box">
      <img className="github__logo" alt="logo" src="https://image.flaticon.com/icons/png/512/25/25231.png" />
      <div
        onClick={socialLoginHandler}
        className="github__login-btn"
      >Log in with Github</div>
    </div>
  )
}

export default GithubLogin
