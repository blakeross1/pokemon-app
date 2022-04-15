import React, { useState, useEffect } from 'react';
import pokeball from './pokeball.png';
import './App.css';
import AddPokemon from './addPokemon';
import useFetch from './useFetch';
import Start from './start';
import axios from 'axios'

function App() {

  const [start,setStart] = useState(false)
  const [p1id, Setp1id] = useState(1)
  const [p2id, Setp2id] = useState(1)
  const [p1hp, setp1hp] = useState(0)
  const [p2hp, setp2hp] = useState(0)
  const {data: poke1, loading: loading1, error: error1} = useFetch("http://localhost:5000/pokemon", p1id)
  const {data: poke2, loading: loading2, error: error2} = useFetch("http://localhost:5000/pokemon", p2id)

  useEffect(() => {
if(loading1){
setp1hp(poke1?.hp)
}
if(loading2){
setp2hp(poke2?.hp)

}
  },[loading1, loading2, ])


  /*  User Definited Fuctions
      -newID: Takes current players id to be set and sets a new random id.
              useFetch will then return a new Pokemon
      -attack: Takes id of player attacking and max damage. It sets the attacked players hp
      -startBattle: initilizes players id and sets the start true bit to show battle Field 
*/
  const newID = (id) => {
    id === p1id ? (
      Setp1id(Math.floor(Math.random() * 150))
      ) :(
        Setp2id(Math.floor(Math.random() * 150))
      )
    }


  const attack = (id, damage) =>{
    var newDamage = Math.floor(Math.random() * damage)

   if (id === p1id){
      setp2hp(p2hp - newDamage)
      if((p2hp - newDamage) <0) {
        setp2hp(0)
      }
   }
   else {
        setp1hp(p1hp - newDamage)
        if((p1hp - newDamage) <0) {
          setp1hp(0)
        }
      
    }

    }

  const startBattle = () => {
      Setp1id(Math.floor(Math.random() * 150)+1)
      Setp2id(Math.floor(Math.random() * 150)+1)
      setStart(true)
      console.log("Start Battle")
    }

    //if battle not started, return start html

if(start === false) return <Start startBattle={startBattle}/>


  //if battle is started show battle field
  

  return (

    <div className="App">
    <header className="App-header">
    
      <h1>
      <img src={pokeball} className="App-logo" alt="logo" />
      !Pokemon Battle Royal!
      <img src={pokeball} className="App-logo" alt="logo" />
      </h1>
      </header>
    <div>
    <div className="player1">
    <AddPokemon poke={poke1} loading={loading1} attack={attack} newID={newID} hp={p1hp}/>
    </div>
    <div className='Pokemon-damage'>Damage: {p2hp}</div> 
    <div className="player2">
    <AddPokemon poke={poke2} loading={loading2} attack={attack} newID={newID} hp={p2hp}/>
    </div>
    </div>

    </div>
  )
}

export default App