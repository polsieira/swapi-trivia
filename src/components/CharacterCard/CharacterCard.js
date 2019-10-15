import React from 'react';
import './CharacterCard.scss'

const CharacterCard = ({ name, homeworld, population, species, films }) => {
  const filmsList = films.map((film, index) => {
    return <li key={index}>{film}</li>
  })
  return (
    <div className="character-card">
      <p className="character-card-detail">Name: {name}</p>
      <p className="character-card-detail">Homeworld: {homeworld}</p>
      <p className="character-card-detail">Population: {population}</p>
      <p className="character-card-detail">Species: {!species ? 'Species Unknown' : species}</p>
      <p className="character-card-detail">Related Films: {filmsList}</p>
      <button>Make a Favorite</button>
    </div>
  )
}

export default CharacterCard;