import React from 'react';

import './Item.css';

/**
 * The item display card. Shows the category and title of a particular item.
 * @param {string} name The name of the item.
 * @param {string} category The category the item belongs to.
 * @param {number} id The ID number of the item.
 * @param {boolean} hasCloseButton Determines if the item has a close button.
 * @param {Function} onClick Callback function which is invoked when the item
 * is clicked.
 */
const Item = ({
  name,
  id,
  category,
  hasCloseButton,
  onClick
}) => (
  <li className="item" onClick={() => onClick(id)}>
    <h2>{name}</h2>
    <p>
      <span className="item--category">{category}</span>
    </p>
    {hasCloseButton &&
      <button className="remove-item" onClick={onClick}>x</button>
    }
  </li>
);

Item.defaultProps = {
  name: 'Dummy item',
  category: 'Dummy category',
  hasCloseButton: false,
  onClick: () => null
};

export default Item;
