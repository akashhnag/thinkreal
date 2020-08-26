import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from "./components/common/Navbar";
import Body from "./components/body/index";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <div className="container">
        <BrowserRouter>
        <TopNavbar></TopNavbar>
        <Body></Body>   
        </BrowserRouter>
       
      </div>
  );
}

export default App;
