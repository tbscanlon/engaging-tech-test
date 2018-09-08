import React from 'react';

import Item from '../Item/Item';

import './BundlePreview.css';

/**
 * The Bundle Preview section. Displays the list of selected items in a bundle.
 */
const BundlePreview = ({ items, handleClick }) => (
  <div className="col-8">
    <h2>Bundle preview</h2>
    <ul className="bundle-preview">
      {items.map(
        itemInfo =>
          <Item
            key={itemInfo.id}
            onClick={handleClick}
            hasCloseButton
            {...itemInfo}
          />
      )}
    </ul>
  </div>
)

BundlePreview.defaultProps = {
  items: [],
  handleClick: () => null
};

export default BundlePreview;