import React, { useState } from 'react';
import DisplayPokemon from './components/displayPokemon'
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [show, setShow] = useState(false)
  const showList = (e) => {
    setShow(true);
  }
  return (
    <div className="App">
      <button onClick={showList}>Fetch Pokemon</button>
      <DisplayPokemon pokemons={pokemons} setPokemons={setPokemons} show={show}/>
    </div>
  );
}

export default App;
