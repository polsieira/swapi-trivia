import React from 'react';
import { shallow } from 'enzyme';

import CharacterCard from './CharacterCard';

describe('CharacterCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CharacterCard
      name="Lord Helmet"
      films="Space Balls"
      homeworld="Planet Spaceball"
      population="100000"
      species='Human'
    />)
  });

  it('should match the snapshot with all data passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });


});