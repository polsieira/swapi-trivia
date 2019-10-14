import React from 'react';
import { shallow } from 'enzyme';

import UserInfo from './UserInfo';

describe('UserInfo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserInfo
      name='Pol'
      quote='I have a dream'
      ranking='Scoundrel'
    />)
  });

  it('should match the snapshot with all data passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });


});