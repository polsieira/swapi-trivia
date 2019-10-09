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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

  render() {
    return (
      <>
        <h1>Welcome To Star Wars Trivia</h1>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
          <label>Quote</label>
          <textarea type="text" placeholder="Quote" name="quote" value={this.state.quote} onChange={this.handleChange}></textarea>
          <label>Ranking</label>
          <select name="ranking" value={this.state.ranking} onChange={this.handleChange}>
            <option value="padawan">Padawan</option>
            <option value="jedi knight">Jedi Knight</option>
            <option value="jedi master">Jedi Master</option>
          </select>
          <button disabled type="submit" >May The Force Be With You</button>
        </form>
      </>
    )
  }
}

export default Form;