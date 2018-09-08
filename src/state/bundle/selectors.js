import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';

const bundle = state => state.bundle;
const items = state => state.items;

const calculateTotal = (bundle) => {
  const prices = bundle.map(item => item.price);
  return prices.reduce((total, currentValue) => total + currentValue);
};

const createBreakdown = (bundle) => {
  const breakdown = {};
  bundle.forEach((bundleItem) => {
    if (breakdown[bundleItem.category]) {
      breakdown[bundleItem.category] += 1;
    } else {
      breakdown[bundleItem.category] = 1;
    }
  });
  return breakdown;
};

export const getBundleTotal = createSelector(
  bundle,
  bundleItems => !isEmpty(bundleItems) ? calculateTotal(bundleItems) : null
);

export const getCategoryBreakdown = createSelector(
  bundle,
  bundleItems => createBreakdown(bundleItems)
);

export const getBundleSize = createSelector(
  bundle,
  bundle => bundle.length
);

export const getBundle = createSelector(
  bundle,
  bundle => bundle
);

export const getItems = createSelector(
  items,
  items => items
);