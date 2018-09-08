import React, { Component } from 'react';

import { store } from './state';
import { actions } from './state/bundle/actions'
import items from './items';

import Layout from './components/Layout/Layout';

import './App.css';

/**
 * The top-level Application component.
 */
class App extends Component {
  /**
   * Loads the items into the application's state on
   * initialisation.
   */
  componentDidMount() {
    store.dispatch(actions.load(items));
  }

  render() {
    return <Layout />
  }
}

export default App;
