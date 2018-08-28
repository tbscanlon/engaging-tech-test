import React from 'react';
import './App.css';

export default () => (
  <div className="wrapper">
    <div className="bundle-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 bundle-summary-left">
            <p>5 items</p>

          </div>
          <div className="col-6 bundle-summary-right">
            3x <span className="category">Bags</span>
            2x <span className="category">Offices</span>
            1x <span className="category">Mice</span>
            <p className="total-price">3.000,23</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container bundle-builder">
      <div className="row">
        <div className="col-4">
          <ul className="item-picker">
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="category">category</span>
              </p>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="category">category</span>
              </p>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="category">category</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="col-8">
          <h2>Bundle preview</h2>
          <ul className="bundle-preview">
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="category">category</span>
              </p>
              <button className="remove-item">x</button>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="category">category</span>
              </p>
              <button className="remove-item">x</button>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="category">category</span>
              </p>
              <button className="remove-item">x</button>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="category">category</span>
              </p>
              <button className="remove-item">x</button>
            </li>
            <li className="item">
              <h2>Dummy item</h2>
              <p>
                <span className="category">category</span>
              </p>
              <button className="remove-item">x</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
