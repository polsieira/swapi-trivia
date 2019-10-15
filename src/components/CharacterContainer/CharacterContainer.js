import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import UserInfo from '../UserInfo/UserInfo';
import CrawlContainer from '../CrawlContainer/CrawlContainer';
import './CharacterContainer.scss';


const CharacterContainer = ({ characters, user, scrollingText, episode, title }) => {

  if (characters.length === 0) {
    return (
      <main className='loadingPage'>
        <h1>Loading..</h1>
        <h3>In the meantime watch this Ewok!</h3>
        <img src={'https://i.imgur.com/ac5hdMu.gif'} alt={'Ewok loading page'} />
      </main>
    )
  }

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
      <div className="character-card-container">
        {characterInfo}
      </div>
      <div className="crawl">
        <CrawlContainer
          title={episode}
          subTitle={title}
          text={scrollingText} />
      </div>
    </div>
  )
}


export default CharacterContainer;