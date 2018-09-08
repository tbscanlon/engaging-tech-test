import React from 'react';

import Item from '../Item/Item';

import './BundlePreview.css';

/**
 * The Bundle Preview section. Displays the list of selected items in a bundle.
 */
const BundlePreview = ({ items }) => (
  <div className="col-8">
    <h2>Bundle preview</h2>
    <ul className="bundle-preview">
      {items.map(
        itemInfo => <Item key={itemInfo.id} {...itemInfo} hasCloseButton />
      )}
    </ul>
  </div>
)

BundlePreview.defaultProps = {
  items: []
};

export default BundlePreview;