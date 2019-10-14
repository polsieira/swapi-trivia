import React from 'react';

const CharacterCard = ({ name, homeworld, population, species, films }) => {
  const filmsList = films.map((film, index) => {
    return <li key={index}>{film}</li>
  })
  return (
    <div className="character-card">
      <p>Name: {name}</p>
      <p>Homeworld: {homeworld}</p>
      <p>Population: {population}</p>
      <p>Species: {!species ? 'Species Unknown' : species}</p>
      <p>Related Films: {filmsList}</p>
      <button>Make a Favorite</button>
    </div>
  )
}

export default CharacterCard;