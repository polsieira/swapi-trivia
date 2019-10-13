import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterContainer = ({ characters }) => {

  const characterInfo = characters.map((character, index) => {
    return <CharacterCard
      name={character.name}
      films={character.films}
      homeworld={character.homeworld}
      population={character.population}
      species={character.species}
      key={index}
    />
  })

  return (
    <h1>{characterInfo}</h1>
  )
}


export default CharacterContainer;