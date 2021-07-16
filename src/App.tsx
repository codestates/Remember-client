import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AccList from "./components/AccList";
import ServicePay from "./components/ServicePay";
import Payment from "./components/Payment";
import PostDetail from "./pages/PostDetail";
import Prepare from "./pages/Prepare";

const App = ({ auth }: any) => {
  return (
    <Router>
      <Navbar auth={auth}></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/postdetail/:id" component={PostDetail}></Route>
        <Route exact path="/accident" component={AccList}></Route>
        <Route exact path="/service/:id" component={ServicePay}></Route>
        <Route exact path="/payment" component={Payment}></Route>
        <Route path="/prepare" component={Prepare}></Route>
        <Route path="/" render={() => <div>404 에러</div>}></Route>
      </Switch>
    </Router>
  );
};

export default App;
