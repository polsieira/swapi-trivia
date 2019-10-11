import React from 'react';
import { shallow } from 'enzyme';

import CharacterCard from './CharacterCard';

describe('CharacterCard', () => {
  it('should match the snapshot with all data passed correctly', () => {
    const wrapper = shallow(<CharacterCard 
      name="Lord Helmet"
      films="Space Balls"
      homeworld="Planet Spaceball"
      population = "100000"
      species = 'Human'
      />)

    expect(wrapper).toMatchSnapshot();
  });


});