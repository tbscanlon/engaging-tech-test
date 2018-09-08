import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';

import Layout from './Layout';

describe('[Component] App', () => {
  let wrapper;

  beforeEach(() => {
    configure({ adapter: new Adapter() });
    wrapper = shallow(<Layout />)
  });

  describe('Initialisation', () => {
    it('Renders successfully', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });
});
