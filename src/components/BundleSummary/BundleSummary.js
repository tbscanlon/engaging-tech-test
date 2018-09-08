import React from 'react';

import './BundleSummary.css';

/**
 * Displays a small badge with the category name and number of items in
 * that category within the current bundle.
 * @param {string} categoryName The name of the category,
 * @param {number} total The number of items in that category within
 * the bundle. 
 */
export const Badge = ({ categoryName, total }) => (
  <React.Fragment>
    {total}x <span className="bundle-summary--category">{categoryName}</span>
  </React.Fragment>
);

/**
 * The Bundle Summary. Contains a running total of items added to the bundle,
 * and their total cost.
 * @param {object} breakdown A list of categories, and number of items in
 * the bundle that match that category.
 * @param {number} total The total cost of all the items in the bundle.
 * @param {number} numberOfitems The number of items within the bundle.
 */
const BundleSummary = ({ total, breakdown, numberOfItems }) => (
  <div className="bundle-summary">
    <div className="container">
      <div className="row">
        <div className="col-6 bundle-summary--left">
          <p>{numberOfItems} items</p>
        </div>
        {breakdown &&
          <div className="col-6 bundle-summary--right">
            {Object.keys(breakdown).map(key => (
              <Badge key={key} categoryName={key} total={breakdown[key]} />
              )
            )}
            {total &&
              <p className="bundle-summary--total-price">{total}</p>
            }
          </div>
        }
      </div>
    </div>
  </div>
);

BundleSummary.defaultProps = {
  total: null,
  breakdown: null,
  numberOfItems: 0
};

export default BundleSummary;