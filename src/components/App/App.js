import React, { Component } from 'react';
import Form from '../Form/Form';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentContainer: <Form />
    }
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
