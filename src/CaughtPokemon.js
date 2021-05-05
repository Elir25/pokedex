import React, { useState } from "react";
import { isElement } from "react-dom/cjs/react-dom-test-utils.development";

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
                return <li>{item}</li>;
            })}
        </ul>
        </div>
    )
}


export default CaughtPokemon;
/**Exercise D (estimate: 15 min) listo 
 * ex E
2. Change the useState to be initialised to an empty array ([])
3. There will now be a bug in your app! We don't see how many Pokemon 
we have caught. Discuss with another student what you think the problem is.
4. Change the JSX to instead render caught.length. Does this fix the bug?
5. Let's now show the names of the Pokemon we have caught. Render a <ul> element within the component. 
Then use the map method to loop through each item in the caught array and render it in an <li> element.
6. Change the catchPokemon function to add a new Pokemon (it doesn't matter which one) onto the caught array. 
(Hint: use the concat method.)
7. (STRETCH GOAL) Generate a random Pokemon each time you click the buttonClick here if you're stuck.
} */