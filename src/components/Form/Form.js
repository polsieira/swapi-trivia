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
    if (!errors.name && !errors.quote) {
      this.setState({ isSignedIn: true });
      this.props.submitUserInfo(this.state);
      this.resetState();
    }
  }

  validateForm() {
    const errors = {
      name: !this.state.name || this.state.name.length === 0 ? 'Name is required' : false,
      quote: !this.state.quote || this.state.quote.length === 0 ? 'Quote is required' : false,
    }
    this.setState({ errors });
    return errors;
  }

  resetState = () => {
    this.setState({
      name: "",
      quote: "",
      ranking: "",
      errors: {}
    })
  }

  render() {
    if (this.state.isSignedIn) {
      return <Redirect to='/movies' />
    }
    return (
      <div className="home">
        <h1 className="h1-welcome-banner">Welcome To Star Wars Trivia</h1>
        <form>
          <input type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={event => this.handleChange(event)} />
          {this.state.errors && <span className='errorMessage'>{this.state.errors.name}</span>}

          <textarea type="text" placeholder="Enter Favorite Quote" name="quote" value={this.state.quote} onChange={event => this.handleChange(event)}></textarea>
          {this.state.errors && <span className='errorMessage'>{this.state.errors.quote}</span>}
          <div>
            <label>Select Jedi Level</label>
            <select name="ranking" value={this.state.ranking} onChange={event => this.handleChange(event)}>
              <option value="padawan">Padawan</option>
              <option value="jedi knight">Jedi Knight</option>
              <option value="jedi master">Jedi Master</option>
            </select>
          </div>
          <button type="submit" className="button--sign-in" onClick={this.signIn}>May The Force Be with You</button>
        </form>
      </div>
    )
  }
}

export default Form;
