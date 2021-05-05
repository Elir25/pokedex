import React from "react";
//const abilities = ['Anticipation', 'Adaptability', 'Run-Away', 'Fly'];

const  BestPokemon = (props) =>  {
return (
    <div>
    <p>My favourite Pokemon is Pikachu</p>
    <ul>
        {props.abilities.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
    </div>
)
}

export default BestPokemon;

