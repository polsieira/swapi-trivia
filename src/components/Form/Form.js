import React, { Component } from "react";
import './Form.scss';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      ranking: ''
    }
  }

  render() {
    return (
      <>
        <h1>Welcome To Star Wars Trivia</h1>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Name" />
          <label>Quote</label>
          <textarea type="text" placeholder="Name"></textarea>
          <label>Ranking</label>
          <select>
            <option value="padawan">Padawan</option>
            <option value="jedi knight">Jedi Knight</option>
            <option value="jedi master">Jedi Master</option>
          </select>
          <button disabled type="submit">May The Force Be With You</button>
        </form>
      </>
    )
  }
}

export default Form;