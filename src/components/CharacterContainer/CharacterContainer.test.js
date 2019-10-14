import React from 'react';
import { shallow } from 'enzyme';

import CharacterContainer from './CharacterContainer';

describe('CharacterContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CharacterContainer
      characters={[{
        films: ["The Empire Strikes Back", "Attack of the Clones", "The Phantom Menace", "Revenge of the Sith", "Return of the Jedi", "A New Hope"],
        homeworld: "Tatooine",
        name: "C-3PO",
        population: "200000",
        species: "Droid"
      },
      {
        films: ["The Empire Strikes Back", "Attack of the Clones", "The Phantom Menace", "Revenge of the Sith", "Return of the Jedi", "A New Hope", "The Force Awakens"],
        homeworld: "Naboo",
        name: "R2-D2",
        population: "4500000000",
        species: "Droid"
      }]}
      user={{
        name: 'Pol',
        quote: 'I have a dream',
        ranking: 'Scoundrel'
      }}
    />)
  });

  it('should match the snapshot with all data passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });


});