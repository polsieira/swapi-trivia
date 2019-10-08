import React, { Component } from 'react';
import { getMovies, getCharacters } from '../../apiCalls';
import Form from '../Form/Form';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentContainer: <Form />
    }
  }

  componentDidMount() {
    getMovies('https://swapi.co/api/films/')
      .then(movies => this.setState({ movies }))
      .then(() => console.log(this.state.movies))
      .then(() => getCharacters(this.state.movies[3].characters))
      .then(results => console.log(results))
      .catch(error => console.log("Error:", error))


  }

  render() {
    return (
      <>
        {this.state.currentContainer}
      </>
    )
  }

}

export default App;
