import React from 'react';

import BundleSummary from '../BundleSummary/BundleSummary';
import ItemPicker from '../ItemPicker/ItemPicker';
import BundlePreview from '../BundlePreview/BundlePreview';

export default () => (
  <div className="wrapper">
    <BundleSummary />
    <div className="container layout--bundle-builder">
      <div className="row">
        <ItemPicker />
        <BundlePreview />
      </div>
    </div>
  </div>
);