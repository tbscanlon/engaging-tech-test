import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';

const bundle = state => state.bundle;
const items = state => state.items;

/**
 * Calculates the total cost for all the items within the bundle.
 * @param bundle The bundle to be priced.
 * @returns {number} The total cost of all items.
 */
const calculateTotal = (bundle) => {
  const prices = bundle.map(item => item.price);
  return prices.reduce((total, currentValue) => total + currentValue);
};

/**
 * Creates a list of categories within the bundle, and the number of
 * items in the bundle that are a part of those categories. Used to
 * create the badges in the bundle summary.
 * @param bundle The bundle to have a breakdown created.
 * @returns {object} The bundle breakdown. 
 */
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

/**
 * Gets the total cost of all items in the bundle.
 */
export const getBundleTotal = createSelector(
  bundle,
  bundleItems => !isEmpty(bundleItems) ? calculateTotal(bundleItems) : null
);

/**
 * Gets a category breakdown of all items in the bundle.
 */
export const getCategoryBreakdown = createSelector(
  bundle,
  bundleItems => createBreakdown(bundleItems)
);

/**
 * Gets the number of items in the bundle.
 */
export const getBundleSize = createSelector(
  bundle,
  bundle => bundle.length
);

/**
 * Gets a copy of the bundle.
 */
export const getBundle = createSelector(
  bundle,
  bundle => bundle
);

/**
 * Gets all items loaded into the store.
 */
export const getItems = createSelector(
  items,
  items => items
);