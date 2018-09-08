import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';

import Item from './Item';

const ITEM_PROPS = {
  name: "Magic Trackpad 2",
  category: "mice",
  id: 1
};
const ON_CLICK = jest.fn();

describe('[Component] Item', () => {
  let wrapper;

  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  describe('Initialisation', () => {
    it('Renders successfully', () => {
      wrapper = shallow(<Item />)
      expect(wrapper.exists()).toBeTruthy();
    });
  });

  describe('Without any props', () => {
    beforeEach(() => {
      wrapper = shallow(<Item />);
    });

    it("Has 'Dummy Item' set as the item title", () => {
      expect(wrapper.html()).toContain('Dummy item');
    });

    it("Has 'Dummy category' set as the item category", () => {
      expect(wrapper.html()).toContain('Dummy category');
    });

    it('Does not have a close button visible', () => {
      expect(wrapper.html()).not.toContain('remove-item');
    });
  });

  describe('With item props', () => {
    beforeEach(() => {
      wrapper = shallow(<Item {...ITEM_PROPS} onClick={ON_CLICK} />);
    });

    it("Sets the title to the name prop", () => {
      expect(wrapper.html()).toContain(ITEM_PROPS.name);
    });

    it("Sets the item's category to the category prop", () => {
      expect(wrapper.html()).toContain(ITEM_PROPS.category);
    });

    it('Does not have a close button visible', () => {
      expect(wrapper.html()).not.toContain('remove-item');
    });

    it('Calls the handed in function when the component is clicked', () => {
      wrapper.find('.item').simulate('click');
      expect(ON_CLICK).toHaveBeenCalled();
    });
  });

  describe('With a close button', () => {
    beforeEach(() => {
      wrapper = shallow(<Item {...ITEM_PROPS} onClick={ON_CLICK} hasCloseButton />)
    });

    it('Displays a close button', () => {
      expect(wrapper.html()).toContain('remove-item');
    });

    it('Calls the prop function when clicked', () => {
      wrapper.find('.remove-item').simulate('click');
      expect(ON_CLICK).toHaveBeenCalled();
    });
  });
});
