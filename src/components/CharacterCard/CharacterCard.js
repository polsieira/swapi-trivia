import React from 'react';
import './CharacterCard.scss'

const CharacterCard = ({ name, homeworld, population, species, films }) => {
  const filmsList = films.map((film, index) => {
    return <li key={index}>{film}</li>
  })
  return (
    <div className="character-card">
      <h2 className="character-card-name">{name}</h2>
      <p>Homeworld: {homeworld}</p>
      <p>Population: {population}</p>
      <p>Species: {!species ? 'Species Unknown' : species}</p>
      <p>Related Films: {filmsList}</p>
      <button>Make a Favorite</button>
    </div>
  )
}

export default CharacterCard;