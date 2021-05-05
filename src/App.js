import React from "react";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";

const abilities = ['Anticipation', 'Adaptability', 'Run-Away', 'Fly'];

function App() {
  return (
    <div>
  <Logo appName="Pokedex"/>
  <BestPokemon abilities={abilities}/>
  <CaughtPokemon />
    </div>
  )
 }


export default App; //last line
/**7. Now open the BestPokemon.js file.
8. Copy the abilities variable and then delete it from BestPokemon.js.
9. Paste the abilities variable into App.js.
10. Pass the abilities variable as a prop to BestPokemon from App.js.
11. In the BestPokemon.js file replace the existing usage of abilities with the abilities prop. 
You should still see the Pokemon ability names in your web browser.
12. (STRETCH GOAL) Repeat the process with the date variable in the CaughtPokemon.js file. */