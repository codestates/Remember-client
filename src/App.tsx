import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import { Root } from "./Store";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Mypage from "./pages/Mypage";

import AccList from "./components/AccList";
import Receipt from "./pages/Receipt";


const App: React.FC = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/mypage" component={Mypage}></Route>
        <Route path="/receipt" component={Receipt}/>
        <Route exact path="/accident" component={AccList}></Route>
        <Route path="/" render={() => <div>404 에러</div>}></Route>
      </Switch>
    </Router>
  );
};

export default App;
