import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';

import BundleSummary from './BundleSummary';

describe('[Component] Bundle Summary', () => {
  let wrapper;

  beforeEach(() => {
    configure({ adapter: new Adapter() });
    wrapper = shallow(<BundleSummary />)
  });

  describe('Initialisation', () => {
    it('Renders successfully', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });
});
