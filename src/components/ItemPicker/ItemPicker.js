import React from 'react';

import Item from '../Item/Item';

import './ItemPicker.css';

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
 * The Item Picker sidebar. Displays potential items for the bundle.
 */
export const ItemPicker = ({ items }) => (
  <div className="col-4">
    <ul className="item-picker">
      {items.map(itemInfo => <Item key={itemInfo.id} {...itemInfo} />)}
    </ul>
  </div>
);

ItemPicker.defaultProps = {
  items: dummyItems
}

export default ItemPicker;