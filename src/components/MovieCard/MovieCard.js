import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = ({ id, title, episode, year, selectMovie }) => {

  return (
    <div className={`movie-card-${id} movie-cards`}>
      <div className="movie-card-info">
        <h3>{title}</h3>
        <p className="movie-card-p">Episode {episode}</p>
        <p className="movie-card-p">Release Date: {year}</p>
        <Link to={`/movies/${id}`}>
          <button className="movie-card-button" value={episode} id={id} onClick={event => selectMovie(event.target.id)}>View Characters</button>
        </Link>
      </div>
    </div>
  )
}

export default MovieCard;