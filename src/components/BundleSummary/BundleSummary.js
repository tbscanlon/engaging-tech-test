import React from 'react';

import './BundleSummary.css';

/**
 * The Bundle Summary. Contains a running total of items added to the bundle,
 * and their total cost.
 */
export default () => (
  <div className="bundle-summary">
    <div className="container">
      <div className="row">
        <div className="col-6 bundle-summary--left">
          <p>5 items</p>

        </div>
        <div className="col-6 bundle-summary--right">
          3x <span className="bundle-summary--category">Bags</span>
          2x <span className="bundle-summary--category">Offices</span>
          1x <span className="bundle-summary--category">Mice</span>
          <p className="bundle-summary--total-price">3.000,23</p>
        </div>
      </div>
    </div>
  </div>
);
