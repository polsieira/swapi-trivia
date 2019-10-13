import React, { Component } from 'react';
import { getMovies, getCharacters } from '../../apiCalls';
import { Route } from 'react-router-dom';
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
      characters: [],
      user: {
        name: '',
        quote: '',
        ranking: ''
      }
    }
  }

  componentDidMount() {
    getMovies('https://swapi.co/api/films/')
      .then(movies => this.setState({ movies }))
    // .then(() => console.log('2nd .then() in App', this.state.movies))
    // .then(() => getCharacters(this.state.movies[3].characters))
    // .then(results => this.setState({ characters: results }))
    // .catch(error => console.log("Error:", error))
  }

  submitUserInfo = (userInfo) => {
    this.setState({
      user: { ...userInfo }
    })
  }

  selectMovie = (id) => {
    this.setState({ movieSelected: id })
  }

  render() {
    return (
      <main className='App'>
        <Route exact path='/' render={() => <Form submitUserInfo={this.submitUserInfo} />} />
        {
          this.state.movies &&
          <Route
            exact path='/movies'
            render={() => <MovieContainer movies={this.state.movies} selectMovie={this.selectMovie} />} />
        }
        {
          this.state.characters &&
          <Route
            exact path='/movies/3'
            render={() => <CharacterContainer characters={this.state.characters} />} />
        }
      </main>
    )
  }

}

export default App;