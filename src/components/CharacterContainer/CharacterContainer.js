import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import UserInfo from '../UserInfo/UserInfo';

const CharacterContainer = ({ characters, user }) => {

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
    <>
      <header>
        <h1>Star Wars Characters</h1>
        <UserInfo
          name={user.name}
          quote={user.quote}
          ranking={user.ranking}
        />
      </header>
      {characterInfo}
    </>
  )
}


export default CharacterContainer;