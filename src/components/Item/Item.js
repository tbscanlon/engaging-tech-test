import React from 'react';

import './Item.css';

/**
 * The item display card. Shows the category and title of a particular item.
 * @param {string} name The name of the item.
 * @param {string} category The category the item belongs to.
 * @param {boolean} hasCloseButton Determines if the item has a close button.
 */
const Item = ({
  name,
  category,
  hasCloseButton
}) => (
  <li className="item">
    <h2>{name}</h2>
    <p>
      <span className="item--category">{category}</span>
    </p>
    {hasCloseButton &&
      <button className="remove-item">x</button>
    }
  </li>
);

Item.defaultProps = {
  name: 'Dummy item',
  category: 'Dummy category',
  hasCloseButton: false
};

export default Item;
