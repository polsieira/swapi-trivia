import React, { Component } from 'react';
// import CharacterCard from '../CharacterCard/CharacterCard';

class CharacterContainer extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  render() {
    return (
      <h1>Character Container!</h1>
    )
  }
}

export default CharacterContainer;