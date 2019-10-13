import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import './Form.scss';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      ranking: '',
      isSignedIn: false
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

  signIn = (event) => {
    event.preventDefault();
    this.setState({ isSignedIn: true });
    this.props.submitUserInfo(this.state);
    this.resetState();
  }

  resetState = () => {
    this.setState({
      name: "",
      quote: "",
      ranking: ""

    })
  }

  render() {
    if (this.state.isSignedIn) {
      return <Redirect to='/movies' />
    }
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
          <button type="submit" className="button--sign-in" onClick={this.signIn}>May The Force Be with You</button>
        </form>
      </>
    )
  }
}

export default Form;
