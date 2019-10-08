import React, { Component } from 'react';
import { getMovies } from '../../apiCalls';
import Form from '../Form/Form';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies:[],
      currentContainer: <Form />
    }
  }

  componentDidMount() {
    getMovies('https://swapi.co/api/films/')
      .then(movies => this.setState({movies}))
      .then(() => console.log(this.state.movies))



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
