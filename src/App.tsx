import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App () {
  return (
    <Router>
      <Navbar></Navbar>
      <div>
        
      </div>
    </Router>
  )
}

export default App