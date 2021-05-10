import React from "react";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";

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
    </div>
  )
 }


export default App; //last line