import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterContainer = (props) => {

  const characterInfo = props.characters.map(character => {
    return <CharacterCard 
      name = { character.name }
      films = { character. films }
      homeworld = { character.homeworld }
      population = { character.population }
      species = { character. species }
    />
  })
  // console.log(props.characters)
  return (
      <h1>{ characterInfo }</h1>
    )
}


export default CharacterContainer;