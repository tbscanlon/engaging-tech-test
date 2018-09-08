import React from 'react';

import Item from '../Item/Item';

import './ItemPicker.css';

/**
 * The Item Picker sidebar. Displays potential items for the bundle.
 */
export const ItemPicker = ({ items, handleClick }) => (
  <div className="col-4">
    <ul className="item-picker">
      {items.map(itemInfo => (
        <Item
          key={itemInfo.id}
          onClick={handleClick}
          {...itemInfo}
        />
      ))}
    </ul>
  </div>
);

ItemPicker.defaultProps = {
  items: [],
  handleClick: () => null
}

export default ItemPicker;