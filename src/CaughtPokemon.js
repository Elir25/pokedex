import React, { useEffect, useState } from "react";
//import { isElement } from "react-dom/cjs/react-dom-test-utils.development";

let date = new Date().toLocaleDateString()


const CaughtPokemon = () => {
    const [caught, setCaught] = useState([])
    const [pokemonNameInput, setPokemonNameInput] = useState("")
    
    const catchPokemon = () => {
        setCaught(caught + 1)
        setCaught(caught.concat(pokemonNameInput))
    }
    function handlerInputChange(event) {
        pokemonNameInput(event.target.value)
    }
    return (
        <div>
        <p>Caught {caught.length} Pokemon on {date}</p>
        <input type="text" value={pokemonNameInput}/>
        <button onClick={catchPokemon}>Catch</button>
        <ul>
            {caught.map((item, index) => {
                return <li key={index}>{item}</li>;
            })}
        </ul>
        </div>
    )
}


export default CaughtPokemon;
