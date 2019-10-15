import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add user info to the state when submitUserInfo is called', () => {
    //Setup
    const userInfo = {
      name: 'Pol',
      quote: 'Pants',
      ranking: 'Scoundrel'
    }

    //Execution
    wrapper.instance().submitUserInfo(userInfo);

    //Expectation
    expect(wrapper.state('user')).toEqual(userInfo)
  });

  it('should be able to select a movie', () => {
    //Setup
    wrapper.setCurrentCharacters = jest.fn();
    wrapper.setState({
      movies: [{ title: 'Movie 1' }, { title: 'Movie 2' }, { title: 'Movie 3' }]
    })
  });
})
