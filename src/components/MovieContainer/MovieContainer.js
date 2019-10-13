import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieContainer = (props) => {
  const movieInfo = props.movies.map(movie => {
    return <MovieCard
      id={movie.episode_id}
      key={movie.episode_id}
      title={movie.title}
      episode={movie.episode_id}
      year={movie.release_date}
    />
  })


  return (
    <main>
      <header>
        <h1>Star Wars Episodes</h1>
        {/* <UserInfo /> */}
      </header>
      {movieInfo}
    </main>
  )

}


export default MovieContainer;