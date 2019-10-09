import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
// import UserInfo from './UserInfo/UserInfo';

class MovieContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

  movieInfo() {
    return this.props.movies.map(movie => {
      return <MovieCard
        title = { movie.title }
        episode = { movie.episode_id }
        year = { movie.release_date }
        />
    })
}

  render() {
    console.log('props in container', this.movieInfo())
    return (
      <main>
        <header>
          <h1>Star Wars Episodes</h1>
          {/* <UserInfo /> */}
        </header>
        { this.movieInfo() }
      </main>
    )
  }
}


export default MovieContainer;