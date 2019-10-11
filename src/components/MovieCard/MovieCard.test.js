import React from 'react';
import { shallow } from 'enzyme';

import MovieCard from './MovieCard';

describe('MovieCard', () => {
  it('should match the snapshot with all data passed correctly', () => {
    const wrapper = shallow(<MovieCard 
      id="1"
      title="A New Hope"
      episode="4"
      year = "A New Hope"
      />)

    expect(wrapper).toMatchSnapshot();
  });


});