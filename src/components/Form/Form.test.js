import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

describe('Form', () => {
  let wrapper;
  const mockSubmitUserInfo = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Form submitUserInfo={mockSubmitUserInfo} />)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to handle change in state based on an event', () => {
    //Setup
    const mockEvent = {
      target: {
        name: 'name',
        value: 'Pol'
      }
    };

    //Execution
    wrapper.instance().handleChange(mockEvent);

    //Expectation
    expect(wrapper.state('name')).toEqual('Pol')
  });

  it('should be able to handle change in state based on an event', () => {
    //Setup
    const mockEvent = {
      target: {
        name: 'quote',
        value: 'I have a dream'
      }
    };

    //Execution
    wrapper.instance().handleChange(mockEvent);

    //Expectation
    expect(wrapper.state('quote')).toEqual('I have a dream')
  });

  it('should be able to handle change in state based on an event', () => {
    //Setup
    const mockEvent = {
      target: {
        name: 'ranking',
        value: 'Scoundrel'
      }
    };

    //Execution
    wrapper.instance().handleChange(mockEvent);

    //Expectation
    expect(wrapper.state('ranking')).toEqual('Scoundrel')
  });

  it('should be able to reset its own state', () => {
    //Setup
    const newState = {
      name: 'Pol',
      quote: 'Blah blah blah',
      ranking: 'Scoundrel',
      errors: 'Booooo',
      isSignedIn: true
    };
    const clearedState = {
      name: '',
      quote: '',
      ranking: '',
      isSignedIn: true,
      errors: {}
    };

    //Execution
    wrapper.setState(newState);
    expect(wrapper.state()).toEqual(newState);

    wrapper.instance().resetState();

    //Expectation
    expect(wrapper.state()).toEqual(clearedState);
  });

  it('should run handleChange on change of the name input', () => {
    //Setup
    const mockEvent = {
      target: {
        name: 'name',
        value: 'Pol'
      }
    }
    wrapper.instance().handleChange = jest.fn();

    //Execution
    wrapper.find('input').simulate('change', mockEvent);

    //Expectation
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
  });

  it('should run handleChange on change of the name input', () => {
    //Setup
    const mockEvent = {
      target: {
        name: 'quote',
        value: 'I have a dream'
      }
    }
    wrapper.instance().handleChange = jest.fn();

    //Execution
    wrapper.find('textarea').simulate('change', mockEvent);

    //Expectation
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
  });

  it('should run handleChange on change of the name input', () => {
    //Setup
    const mockEvent = {
      target: {
        name: 'ranking',
        value: 'Scoundrel'
      }
    }
    wrapper.instance().handleChange = jest.fn();

    //Execution
    wrapper.find('select').simulate('change', mockEvent);

    //Expectation
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
  });

  it('should call signIn when submit button is clicked', () => {
    //Setup
    wrapper.instance().signIn = jest.fn();
    wrapper.instance().forceUpdate();
    //Execution
    wrapper.find('button').simulate('click');

    //Expectation
    expect(wrapper.instance().signIn).toHaveBeenCalled();
  });

  it('should be able to validate form and return necessary errors', () => {
    //Setup
    wrapper.setState({
      name: '',
      quote: ''
    })
    //Execution
    wrapper.instance().validateForm();

    //Expectation
    expect(wrapper.state.errors).toEqual('dfsa');
  })

});