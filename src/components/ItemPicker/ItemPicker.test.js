import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';

import ItemPicker from './ItemPicker';
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

describe('[Component] Bundle Summary', () => {
  let wrapper;

  beforeEach(() => {
    configure({ adapter: new Adapter() });
    wrapper = shallow(<ItemPicker />)
  });

  describe('Initialisation', () => {
    it('Renders successfully', () => {
      expect(wrapper.exists()).toBeTruthy();
    })
  });

  describe('Contents', () => {
    beforeEach(() => {
      wrapper = shallow(<ItemPicker items={ITEMS} />);
    });

    it('Creates an Item component for each item passed in', () => {
      expect(wrapper.find(Item).length).toBe(ITEMS.length);
    });
  });
});
