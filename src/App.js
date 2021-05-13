import React from "react";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";
import PokemonCity from "./PokemonCity";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector"

const abilities = ['Anticipation', 'Adaptability', 'Run-Away', 'Fly'];



function App() {
  
  function logWhenClicked() {
    console.log('you clicked me!!');
  } 

  return (
    <div>
  <Logo appName="Pokedex" handleClick={logWhenClicked}/>
  <BestPokemon abilities={abilities}/>
  <CaughtPokemon />
  {/* <PokemonMoves/> */}
  <PokemonMovesSelector />
  <PokemonCity />
    </div>
  )
 }


export default App; //last line