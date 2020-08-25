import React from 'react'
import { useEffect } from 'react';

const DisplayPokemon = (props) =>{
    const {pokemons, setPokemons, show} = props;
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.json())
        .then(response => setPokemons(response.results))
    }, [])
    return (
        <div>
            {show === true && pokemons.length > 0 && pokemons.map((pokemon, index)=>{
                return (<li key={index}>{pokemon.name}</li>)
            })}
        </div>
    )
}
 export default DisplayPokemon;