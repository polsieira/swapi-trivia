import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import UserInfo from '../UserInfo/UserInfo';
import './MovieContainer.scss';

const MovieContainer = ({ movies, user, selectMovie }) => {
  const movieInfo = movies.map(movie => {
    return (
      <MovieCard
        id={movie.episode_id}
        key={movie.episode_id}
        title={movie.title}
        episode={movie.episode_id}
        year={movie.release_date}
        selectMovie={selectMovie}
      />
    )
  })


  return (
    <div className="movie-container">
      <header>
        <h1 className="movie-container-heading">Star Wars Episodes</h1>
        <UserInfo
          name={user.name}
          quote={user.quote}
          ranking={user.ranking}
        />
      </header>
      {movieInfo}
    </div>

  )

}


export default MovieContainer;