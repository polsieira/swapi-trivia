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

    //Expectation
    expect(wrapper.instance().validateForm()).toEqual({ "name": "Name is required", "quote": "Quote is required" });
  });

  it('should call validate form and submituser info if there are no errors', () => {
    //Setup
    const mockEvent = {
      preventDefault: jest.fn()
    };
    wrapper.instance().validateForm = jest.fn().mockReturnValue({
      name: '',
      quote: ''
    });
    wrapper.instance().resetState = jest.fn();
    const newState = {
      name: 'Pol',
      quote: 'I have a dream',
      ranking: 'Scoundrel',
    };
    const expectedState = {
      name: 'Pol',
      quote: 'I have a dream',
      ranking: 'Scoundrel',
      isSignedIn: true,
      errors: {}
    }
    wrapper.setState(newState)

    //Execution
    wrapper.instance().signIn(mockEvent);

    //Expectation
    expect(wrapper.instance().validateForm).toHaveBeenCalled();
    expect(wrapper.state('isSignedIn')).toEqual(true);
    expect(mockSubmitUserInfo).toHaveBeenCalledWith(expectedState);
    expect(wrapper.instance().resetState).toHaveBeenCalled();
  })

  it('should call validate form and not submituser info if there are errors', () => {
    //Setup
    const mockEvent = {
      preventDefault: jest.fn()
    };
    wrapper.instance().validateForm = jest.fn().mockReturnValue({
      name: 'Error',
      quote: 'Error'
    });
    wrapper.instance().resetState = jest.fn();
    wrapper.setState({
      name: 'Pol',
      quote: 'I have a dream',
      ranking: 'Scoundrel'
    })

    //Execution
    wrapper.instance().signIn(mockEvent);

    //Expectation
    expect(wrapper.instance().validateForm).toHaveBeenCalled()
  });

  it('should add error message if form state is empty', () => {
    //Expectation
    expect(wrapper.instance().validateForm()).toEqual({ name: 'Name is required', quote: 'Quote is required' })
  });

  it('should not add error message if form state is not empty', () => {
    //Setup
    wrapper.setState({ name: 'Pol', quote: 'Pants' })
    //Expectation
    expect(wrapper.instance().validateForm()).toEqual({ name: false, quote: false })
  });

});