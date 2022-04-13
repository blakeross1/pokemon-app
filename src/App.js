import React, { useState, useEffect } from 'react';
import pokeball from './pokeball.png';
import './App.css';
import AddPokemon from './addPokemon';
import AttackPokemon from './attackPokemon';




function App() {


  const [p1id, Setp1id] = useState(Math.floor(Math.random() * 150))
  const [p2id, Setp2id] = useState(Math.floor(Math.random() * 150))
  const [damage, Setdamage] = useState(0)





  //randomizes the id of the players pokemon for the api get
const randomize = (id) => {
id === p1id ? (
  Setp1id(Math.floor(Math.random() * 150))
  ) :(
    Setp2id(Math.floor(Math.random() * 150))
  )
  console.log(p1id)
  console.log(p2id)
}

//depending on the player doing the attacking this will set the opponents hp
//damage is set from addPokemon.js

function attack (damage) {
  Setdamage(Math.floor(damage*Math.random()))

}



  return (
    <div className="App">
      <header className="App-header">
        <h1>
        <img src={pokeball} className="App-logo" alt="logo" />
        !Pokemon Battle Royal!
        <img src={pokeball} className="App-logo" alt="logo" />
        </h1>
      <body>
      <div className="player1">
      <AddPokemon id={p1id} attack={attack}/>
      <AttackPokemon  id={2} damage={damage}/>
      <button className="button-18" onClick={() => randomize(p1id)}>New Pokemon</button>
      </div>
      <div className="player2">
      <AddPokemon id={p2id} attack={attack} />
      <AttackPokemon  id={2} damage={damage}/>
      <button className="button-18" onClick={() => randomize(p2id)}>New Pokemon</button>
      </div>
    
      </body>
      </header>
    </div>

  );
}

export default App;