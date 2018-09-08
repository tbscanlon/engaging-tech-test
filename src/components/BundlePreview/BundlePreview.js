import React from 'react';

import Item from '../Item/Item';

import './BundlePreview.css';

/**
 * Small set of dummy items in place to test behaviour until redux is set up.
 */
const dummyItems = [
  {
    id: 1,
    name: "Magic Trackpad 2",
    category: "mice"
  },
  {
    id: 2,
    name: "Magic Trackpad 2",
    category: "mice"
  },
  {
    id: 3,
    name: "Magic Trackpad 2",
    category: "mice"
  }
]

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
  items: dummyItems
};

export default BundlePreview;