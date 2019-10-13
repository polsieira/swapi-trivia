import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, episode, year }) => {

  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <p>{episode}</p>
      <p>{year}</p>
      <Link to='/movies/3'>
        <button value={episode} >View Characters</button>
      </Link>
    </div>
  )
}

export default MovieCard;