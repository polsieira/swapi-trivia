import React from 'react';
import { shallow } from 'enzyme';

import CrawlContainer from './CrawlContainer';

describe('CharacterContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CrawlContainer
      title={'Epsiode 1000'}
      subTitle={'Revenge of the Revenge'}
      text={'Texty text text'}
    />)
  });

  it('should match the snapshot with all data passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });


});