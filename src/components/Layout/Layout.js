import React from 'react';

import BundleSummary from '../BundleSummary/BundleSummary';
import ItemPicker from '../../containers/ItemPicker/ItemPicker';
import BundlePreview from '../../containers/BundlePreview/BundlePreview';

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