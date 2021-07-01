import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as firebaseCreators from '../action-creators/firebaseCreators';

const Login = ({auth}:any) => {
  const dispatch = useDispatch();
  const { getAuth } = bindActionCreators(
    firebaseCreators,
    dispatch
  );

  const onLogin = (e:any) => {
    console.log(auth.login)
    auth
      .login(e.target.textContent)
      .then(console.log)
  }

  return (
    <div>
      <h1>Login</h1>
      <ul>
        <li><button onClick={onLogin}>Google</button></li>
        <li><button onClick={onLogin}>Github</button></li>
      </ul>
    </div>
  )
}

export default Login
