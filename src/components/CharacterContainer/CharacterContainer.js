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

  return (
    <div className="character-container">
      <header>
        <h1>Star Wars Characters</h1>
        <UserInfo
          name={user.name}
          quote={user.quote}
          ranking={user.ranking}
        />
      </header>
      <div className='crawl'>
        <CrawlContainer
          title={episode}
          subTitle={title}
          text={scrollingText} />
      </div>

      {characterInfo}
    </div>
  )
}


export default CharacterContainer;