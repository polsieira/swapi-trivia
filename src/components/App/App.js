import React, { Component } from 'react';
import { getMovies, getCharacters } from '../../apiCalls';
import { BrowserRouter as Route } from 'react-router-dom'
import Form from '../Form/Form';
import MovieContainer from '../MovieContainer/MovieContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieSelected: null,
      movies: [],
      characters: []
    }
  }

  componentDidMount() {
    getMovies('https://swapi.co/api/films/')
      .then(movies => this.setState({ movies }))
      .then(() => console.log('2nd .then() in App', this.state.movies))
      .then(() => getCharacters(this.state.movies[3].characters))
      .then(results => this.setState({ characters: results }))
      .catch(error => console.log("Error:", error))
  }

  selectMovie = (id) => {
    this.setState({ movieSelected: id })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Form} />
        {this.state.movies &&
          <Route
            exact path='/movies'
            render={() => <MovieContainer movies={this.state.movies} selectMovie={this.selectMovie} />} />
        }
        {this.state.characters &&
          <Route
            exact path='/movies/3'
            render={() => <CharacterContainer characters={this.state.characters} />} />
        }
      </div>
    )
  }

}

export default App;
