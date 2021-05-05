import React from "react";

//let appName = "Pokedex";

const Logo = (props) => {
    return (
      <header>
         <h1>Welcome to {props.appName}</h1>
         <img onClick={logWhenClicked} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt=""/>
         </header>
    )
  }

  function logWhenClicked() {
      console.log('you clicked me!!');
  }
export default Logo;

/**1. Open the pokedex React application from last week and open the Logo.js file.
2. Add a function named logWhenClicked within the Logo component. (Hint: look at the example above).
3. In the logWhenClicked function, console.log a message (it doesn't matter what the message is).
4. Add an onClick handler to the <img> that will call logWhenClicked. (Hint: look at the ClickLogger component above).
5. In your web browser, try clicking on the logo image. What do you see in the JavaScript console?
6. In a group of 2 - 3 students, discuss what would happen if you changed your code to onClick={logWhenClicked()}. Can you explain why?
7. Report your discussion back to the rest of the class. */
