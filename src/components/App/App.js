import React, { Component } from 'react';
import { getMovies, getCharacters } from '../../apiCalls';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Form from '../Form/Form';
import MovieContainer from '../MovieContainer/MovieContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
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
      <Router>
        <Route exact path='/' component={ Form } />
        {this.state.movies &&        
          <Route 
            exact path='/movies' 
            render={() => <MovieContainer movies={this.state.movies}/> }/>
        }
        <Route exact path='/movies/3' component={ CharacterContainer }/>
      </Router>

    )
  }

}

export default App;
