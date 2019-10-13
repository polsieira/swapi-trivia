import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import './Form.scss';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      ranking: 'Space Balls',
      isSignedIn: false,
      errors: {}
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

  signIn = (event) => {
    event.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors });
    if (!errors.name && !errors.quote && !errors.ranking) {
      this.setState({ isSignedIn: true });
      this.props.submitUserInfo(this.state);
      this.resetState();
    }
  }

  validateForm() {
    return {
      name: !this.state.name || this.state.name.length === 0 ? 'Name is required' : false,
      quote: !this.state.quote || this.state.quote.length === 0 ? 'Quote is required' : false,
      ranking: !this.state.ranking || this.state.ranking.length === 0 ? 'Ranking is required' : false
    }
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
          {this.state.errors && <span className='errorMessage'>{this.state.errors.name}</span>}

          <label>Quote</label>
          <textarea type="text" placeholder="Quote" name="quote" value={this.state.quote} onChange={this.handleChange}></textarea>
          {this.state.errors && <span className='errorMessage'>{this.state.errors.quote}</span>}

          <label>Ranking</label>
          <select name="ranking" value={this.state.ranking} onChange={this.handleChange}>
            <option value="padawan">Padawan</option>
            <option value="jedi knight">Jedi Knight</option>
            <option value="jedi master">Jedi Master</option>
          </select>
          {this.state.errors && <span className='error'>{this.state.errors.rank}</span>}
          <button type="submit" className="button--sign-in" onClick={this.signIn}>May The Force Be with You</button>
        </form>
      </>
    )
  }
}

export default Form;
