import React from 'react';
import MovieCard from './MovieCard/MovieCard';
import UserInfo from './UserInfo/UserInfo';

const MovieContainer = () => {
  return (
    <main>
      <header>
        <h1>Star Wars Episodes</h1>
        <UserInfo />
      </header>
      <MovieCard />
    </main>
  )
}

export default MovieContainer;