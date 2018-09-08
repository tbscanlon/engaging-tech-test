import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';

import BundlePreview from './BundlePreview';
import Item from '../Item/Item';

const ITEMS = [
  {
    id: 1,
    name: "Magic Trackpad 2",
    category: "mice"
  },
  {
    id: 2,
    name: "Magic Trackpad 2",
    category: "mice"
  },
  {
    id: 3,
    name: "Magic Trackpad 2",
    category: "mice"
  }
]

describe('[Component] Bundle Preview', () => {
  let wrapper;

  beforeEach(() => {
    configure({ adapter: new Adapter() });
    wrapper = shallow(<BundlePreview />)
  });

  describe('Initialisation', () => {
    it('Renders successfully', () => {
      expect(wrapper.exists()).toBeTruthy();
    })
  })

  describe('Contents', () => {
    beforeEach(() => {
      wrapper = shallow(<BundlePreview items={ITEMS} />);
    });

    it('Creates an Item component for each item passed in', () => {
      expect(wrapper.find(Item).length).toBe(ITEMS.length);
    });
  });
});
