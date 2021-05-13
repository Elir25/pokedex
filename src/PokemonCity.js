import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  return (
    <div>
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
