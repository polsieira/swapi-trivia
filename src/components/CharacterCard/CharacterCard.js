import React from 'react';

const CharacterCard = ({ name, homeworld, population, species, films }) => {
  return (
    <div className="character-card">
      <p>Name: {name}</p>
      <p>Homeworld: {homeworld}</p>
      <p>Population: {population}</p>
      <p>Species: {species}</p>
      <p>Related Films: {films}</p>
      <button>Make a Favorite</button>
    </div>
  )
}

export default CharacterCard;