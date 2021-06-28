import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PostDetail from "./components/PostDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/" render={() => <div>404 에러</div>}></Route>
      </Switch>
    </Router>
  );
};

export default App;
