import { useState } from 'react';
import './App.css'
import PuppyList from "./PuppyList"
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
<>
<h1>Puppy Details</h1>
<PuppyList/>
<div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to ="/"></Link>
        <Link to ="/"></Link>
        <Link to ="/"></Link>

        </div>
      <div id="main-section">
          <Routes>
          <Route path="/" element ={<h1></h1>} />
          <Route path="/" element ={<h1></h1>} />
          <Route path="/" element ={<h1></h1>} />
          </Routes></div>
    </div>





</>
  );

}

export default App
