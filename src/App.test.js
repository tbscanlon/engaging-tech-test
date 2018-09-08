import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';

import App from './App';

describe('[Component] App', () => {
  let wrapper;

  beforeEach(() => {
    configure({ adapter: new Adapter() });
    wrapper = shallow(<App />)
  });

  describe('Initialisation', () => {
    it('Renders successfully', () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });
});
