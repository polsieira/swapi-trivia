import React from 'react';
import { shallow } from 'enzyme';

import MovieContainer from './MovieContainer';

describe('MovieContainer', () => {
  let wrapper;
  const mockSelectMovie = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<MovieContainer
      movies={[
        {
          episode_id: 1,
          title: 'Space Balls',
          release_date: 1995
        },
        {
          episode_id: 2,
          title: 'Space Cats',
          release_date: 2017
        }
      ]}
      user={{
        name: 'Pol',
        quote: 'I have a dream',
        ranking: 'Scoundrel'
      }}
      selectMovie={mockSelectMovie}
    />)
  })
  it('should match the snapshot with all data passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });


});