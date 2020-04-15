import React from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './components/Input/Input'

function App() {
  return (
    <div className="App" style={{background: "#e0e0e0"}}>
      <div style={{width: "600px", height: "600px", margin: "0 auto", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <img src={logo} style={{width: "200px", marginBottom: "2rem"}} alt="react logo" />
          <h1 style={{marginBottom: "3rem"}}>Type your text below</h1>
          <Input />
      </div>
    </div>
  );
}

export default App;
