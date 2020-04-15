import React from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './components/Input/Input'

function App() {
  const divStyles = {
    width: "600px",
    height: "600px",
    margin: "5rem auto 0",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "1.5rem",
    boxShadow: "0px 4px 16px #BDBDBD"
  }

  return (
    <div className="App">
      <div style={divStyles}>
          <img src={logo} style={{width: "200px", marginBottom: "2rem"}} alt="react logo" />
          <h1 style={{marginBottom: "3rem"}}>Type your text below</h1>
          <Input />
      </div>
    </div>
  );
}

export default App;
