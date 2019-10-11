import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

describe('Form', () => {
  it('should match the snapshot with all data passed correctly', () => {
    const wrapper = shallow(<Form/>)

    expect(wrapper).toMatchSnapshot();
  });


});