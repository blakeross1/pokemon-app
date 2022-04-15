import React from 'react';
import pokeball from './pokeball.png';
import './App.css';


function Start({startBattle}) {
  return (
    <div className="App">
    <header className="App-header">
    
      <h1>
      <img src={pokeball} className="App-logo" alt="logo" />
      !Pokemon Battle Royal!
      <img src={pokeball} className="App-logo" alt="logo" />
      </h1>
      </header>
   <button className="button-18" onClick={() => startBattle()}>Start the Battle</button>
   </div>
  )
}

export default Start