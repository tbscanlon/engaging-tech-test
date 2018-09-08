import React from 'react';
import './App.css';

import BundleSummary from './components/BundleSummary/BundleSummary';
import ItemPicker from './components/ItemPicker/ItemPicker';
import BundlePreview from './components/BundlePreview/BundlePreview';

/**
 * The top-level Application component.
 */
export default () => (
  <div className="wrapper">
    <BundleSummary />
    <div className="container bundle-builder">
      <div className="row">
        <ItemPicker />
        <BundlePreview />
      </div>
    </div>
  </div>
);
