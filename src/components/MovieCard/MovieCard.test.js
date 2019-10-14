import React from 'react';
import { shallow } from 'enzyme';

import MovieCard from './MovieCard';

describe('MovieCard', () => {
  let wrapper;
  const mockSelectMovie = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<MovieCard
      id="1"
      title="A New Hope"
      episode="4"
      year="2018"
      selectMovie={mockSelectMovie}
    />)
  });

  it('should match the snapshot with all data passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call select movie on button click', () => {
    //Setup
    const mockEvent = {
      target: {
        id: '2'
      }
    }

    //Execution
    wrapper.find('button').simulate('click', mockEvent);

    //Expectation
    expect(mockSelectMovie).toHaveBeenCalledWith(mockEvent.target.id);

  })


});