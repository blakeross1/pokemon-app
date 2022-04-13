import React, {useState, useEffect} from 'react'


const AttackPokemon = ({id, damage}) => {

    const [playerdead, Setplayerdead] = useState(false)
    const [p1hp, Setp1hp] = useState(100)
    const [p2hp, Setp2hp] = useState(100)
    const attackdamage = Math.floor(damage*Math.random())
    const newhp = 0
    
    useEffect(() => {
        //attack player
            id === 1 ? (
              Setp2hp(p2hp - attackdamage)
              ) : (
                Setp1hp(p1hp - attackdamage)
              )
          
        //see if player is dead
         if(p1hp <= 0) {
           Setp1hp(0)
           Setplayerdead(true)
        }
        else {Setplayerdead(false)}
     
       },[p2hp,p1hp,attackdamage,id])


if (playerdead){
return (
    <div>
        <div className='Pokemon-attack'>You're dead! Pick a new Pokemon</div>
    </div>
    )
}
else {
return (
        <div>
            <div className='Pokemon-attack'>You recieved {attackdamage} damage!</div>
            <div className='Pokemon-attack'>You're remaing health is: {newhp}!</div>
        </div>
    )
}
}



export default AttackPokemon
