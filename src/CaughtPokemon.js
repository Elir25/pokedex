import React, { useState } from "react";
//import { isElement } from "react-dom/cjs/react-dom-test-utils.development";

let date = new Date().toLocaleDateString()


const CaughtPokemon = () => {
    const [caught, setCaught] = useState([])
    
    const catchPokemon = () => {
        //setCaught(caught + 1)
        setCaught(caught.concat("pikachu"))
    }
    return (
        <div>
        <p>Caught {caught.length} Pokemon on {date}</p>
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
