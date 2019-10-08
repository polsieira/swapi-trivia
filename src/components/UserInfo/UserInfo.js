import React, { Component } from 'react';

class UserInfo extends Component() {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
  }

  render() {
    return(
      <>
        <h2>Name: {}</h2>
        <p>Quote: {}</p>
        <p>Ranking: {}</p>
        <button>Sign Out</button>
      </>
    )
  }
}

export default UserInfo;