import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Capitalize = (str) => {
      if (str === undefined)
      {
       return null;
      }
      else {
      return str.charAt(0).toUpperCase() + str.slice(1);
      }
}

const AddPokemon = ({id, attack}) => {

    const [pokemon, setPokemon] = useState([{}])

    useEffect(() => {
        axios.get('http://localhost:5000/pokemon', {params: {id: id}})
        .then(res => {
            console.log(res)
            setPokemon(res.data)
            })
        .catch(err => {
            console.log(err)
        })
        console.log(id)
    },[id]
    
    )


  return (
<div>
<div className='Pokemon-name'>Name: {Capitalize(pokemon.name)}</div>
<div className='Pokemon-details'>HP: {pokemon.hp}</div> 
<div>
<img 
src={pokemon.img} 
width = '300'
height = '300'
alt='new'/>
</div>
<button onClick={() => attack(pokemon.hp)} className="button-18">{Capitalize(pokemon.moves)}</button>
   </div>
  )
}

export default AddPokemon