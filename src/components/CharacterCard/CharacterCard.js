import React from 'react';

const CharacterCard = (props) => {
  return (
    <div className="character-card">
      <p>Name: {props.name}</p>
      <p>Homeworld: {props.homeworld}</p>
      <p>Population: {props.population}</p>
      <p>Species: {props.species}</p>
      <p>Related Films: {props.films}</p>
      <button>Make a Favorite</button>
    </div>
  )
}

export default CharacterCard;