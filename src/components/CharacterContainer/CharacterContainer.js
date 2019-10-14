import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import UserInfo from '../UserInfo/UserInfo';
import CrawlContainer from '../CrawlContainer/CrawlContainer';

const CharacterContainer = ({ characters, user, scrollingText, episode, title }) => {

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

  console.log(scrollingText)

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
      <CrawlContainer
        title={episode}
        subTitle={title}
        text={scrollingText} />
      {characterInfo}
    </>
  )
}


export default CharacterContainer;