import React, { Component } from 'react';
// import MovieCard from './MovieCard/MovieCard';
// import UserInfo from './UserInfo/UserInfo';

class MovieContainer extends Component{
  constructor() {
    super();
    this.state = {
      characters: []
    }
  }

  render() {
    return (
      <main>
        <header>
          <h1>Star Wars Episodes</h1>
          {/* <UserInfo /> */}
        </header>
        {/* <MovieCard /> */}
      </main>
    )
  }
}


export default MovieContainer;