import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {

  return(
    <div className="movie-card">
      <h3>{props.title}</h3>
      <p>{props.episode}</p>
      <p>{props.year}</p>
      <Link to='/movies/3'>
        <button value={props.episode} onClick={event => props.selectMovie(event.target.value)}>View Characters</button>
      </Link>
    </div>
  )
}

export default MovieCard;