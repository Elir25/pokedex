import React from "react";

//let appName = "Pokedex";

const Logo = (props) => {
    return (
      <header>
         <h1>Welcome to {props.appName}</h1>
         <img onClick={props.handleClick} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt=""/>
         </header>
    )
  }

  /*function logWhenClicked() {
      console.log('you clicked me!!');
  }*/
export default Logo;

