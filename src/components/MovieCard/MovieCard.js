import React from 'react';

const MovieCard = (props) => {
  console.log('IN CARD', props)

  return(
    <div className="movie-card">
      <h3>{props.title}</h3>
      <p>{props.episode}</p>
      <p>{props.year}</p>
      <button>View Characters</button>
    </div>
  )
}

export default MovieCard;