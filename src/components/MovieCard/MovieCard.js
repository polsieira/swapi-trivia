import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, episode, year, selectMovie }) => {

  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <p>{episode}</p>
      <p>{year}</p>
      <Link to={`/movies/${id}`}>
        <button value={episode} id={id} onClick={event => selectMovie(event.target.id)}>View Characters</button>
      </Link>
    </div>
  )
}

export default MovieCard;