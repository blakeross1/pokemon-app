import React from 'react'
import './App.css';


const Capitalize = (str) => {
      if (str === undefined)
      {
       return null;
      }
      else {
      return str.charAt(0).toUpperCase() + str.slice(1);
      }
}

const AddPokemon = ({poke, loading, attack, newID, hp}) => {

  if (loading) return (
    <div>
    <h1>Loading...</h1>
    </div>
  )

  return (
<div>
<div className='Pokemon-name'>{Capitalize(poke?.name)}</div>
<div className='Pokemon-details'>HP: {hp}</div> 
<div>
<img className="Pokemon-image"
src={poke?.img} 
width = '300'
height = '300'
alt='new'/>
</div>
{(hp > 0)  
? <button className="button-18" onClick={() => attack(Number(poke?.id), poke?.hp)}>{Capitalize(poke?.moves)}</button>
: (<div><div id="fadeout" className='Pokemon-dead'>DEAD</div> 
<button className="button-18" onClick={() => newID(Number(poke?.id))}>New Pokemon</button></div>)}
<div></div>


</div>

   
  )
}

export default AddPokemon