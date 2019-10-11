import React from 'react';
import { shallow } from 'enzyme';

import MovieContainer from './MovieContainer';

describe('MovieContainer', () => {
  it('should match the snapshot with all data passed correctly', () => {
    const wrapper = shallow(<MovieContainer 
      movies
      />)

    expect(wrapper).toMatchSnapshot();
  });


});