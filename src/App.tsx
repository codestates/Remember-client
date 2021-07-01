import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './action-creators/loginCreators';
import * as firebaseCreators from './action-creators/firebaseCreators';
import { Root } from "./Store";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Mypage from "./pages/Mypage";
import AccList from "./components/AccList";
import ServicePay from "./components/ServicePay";

import Receipt from "./pages/Receipt";
import Login from "./pages/Login";

const App = ({auth}:any) => {
  // const dispatch = useDispatch();
  // const { setAuth } = bindActionCreators(
  //   firebaseCreators,
  //   dispatch
  // );
  // const firebase = useSelector((state: Root) => state.firebase);
  
  return (
    <Router>
      <Navbar auth={auth}></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/mypage" component={Mypage}></Route>
        <Route exact path="/accident" component={AccList}></Route>
        <Route exact path="/service" component={ServicePay}></Route>
        <Route path="/receipt" component={Receipt} />
        <Route path="/" render={() => <div>404 에러</div>}></Route>
      </Switch>
    </Router>
  );
};

export default App;
