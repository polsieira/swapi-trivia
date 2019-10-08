import React from 'react';

const CharacterCard = () => {
  return (
    <div className="character-card">
      <p>Name: {}</p>
      <p>Homeworld: {}</p>
      <p>Population: {}</p>
      <p>Species: {}</p>
      <p>Related Films: {}</p>
      <button>Make a Favorite</button>
    </div>
  )
}

export default CharacterCard;