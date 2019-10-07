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
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={event => this.handleChange(event)} />
          <label>Quote</label>
          <textarea type="text" placeholder="Quote" name="quote" value={this.state.quote} onChange={event => this.handleChange(event)}></textarea>
          <label>Ranking</label>
          <select name="ranking" onChange={event => this.handleChange(event)}>
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