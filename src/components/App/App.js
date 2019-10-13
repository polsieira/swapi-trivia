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
      movies: [],
      selectedMovie: {},
      selectedCharacters: [],
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
  }

  submitUserInfo = (userInfo) => {
    this.setState({
      user: { ...userInfo }
    })
  }

  selectMovie = (id) => {
    this.setState({ selectedMovie: this.state.movies[id - 1] });
    this.setCurrentCharacters(this.state.movies[id - 1].characters);
  }

  setCurrentCharacters = (characters) => {
    getCharacters(characters)
      .then(response => this.setState({ selectedCharacters: response }))
      .then(() => this.forceUpdate())
  }

  render() {
    return (
      <main className='App'>
        <Route exact path='/' render={() => <Form submitUserInfo={this.submitUserInfo} />} />
        {
          this.state.movies &&
          <Route
            exact path='/movies'
            render={() => <MovieContainer movies={this.state.movies} user={this.state.user} selectMovie={this.selectMovie} />} />
        }
        {
          this.state.selectedCharacters &&
          <Route
            exact path='/movies/:id'
            render={() => {
              return <CharacterContainer characters={this.state.selectedCharacters} user={this.state.user} />
            }} />
        }
      </main>
    )
  }

}

export default App;