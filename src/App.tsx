import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './action-creators/loginCreators';
import { Root } from "./Store";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Mypage from "./pages/Mypage";
import Receipt from "./pages/Receipt";
import Login from "./pages/Login";

const App = ({auth}:any) => {
  const dispatch = useDispatch();
  const { setToken } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const token = useSelector((state: Root) => state.login);



  return (
    <Router>
      <h1>{token}</h1>
      <Navbar auth={auth}></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/mypage" component={Mypage}/>
        <Route path="/receipt" component={Receipt}/>
        <Route path="/" render={() => <div>404 에러</div>}></Route>
        
      </Switch>
    </Router>
  );
};

export default App;
