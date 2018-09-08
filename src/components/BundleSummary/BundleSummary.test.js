import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';

import BundleSummary, { Badge } from './BundleSummary';

const BREAKDOWN = {
  mice: 5,
  laptopBags: 2
};
const TOTAL = 1500;
const NUMBER_OF_ITEMS = 7;

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

  describe('Without props', () => {
    it('Does not render any summary items', () => {
      expect(wrapper.find(Badge).length).toBe(0);
    });

    it('Does not render a total amount', () => {
      expect(wrapper.find('.bundle-summary--total-price').length).toBe(0);
    });

    it('Shows that the bundle is empty', () => {
      expect(wrapper.find('.bundle-summary--left').html()).toContain('0 items')
    });
  });

  describe('With props', () => {
    beforeEach(() => {
      wrapper = shallow(
        <BundleSummary
          numberOfItems={NUMBER_OF_ITEMS}
          breakdown={BREAKDOWN}
          total={TOTAL}
        />)
    });

    it('Renders a breakdown of the items within the bundle', () => {
      expect(wrapper.find(Badge).length).toBe(Object.keys(BREAKDOWN).length);
    });

    it('Renders the total cost of the bundle', () => {
      expect(wrapper.find('.bundle-summary--total-price').html()).toContain(TOTAL);
    });

    it('Renders the number of items within the bundle', () => {
      expect(wrapper.find('.bundle-summary--left').html()).toContain(NUMBER_OF_ITEMS);
    });
  });
});
