import { createStore } from 'redux';

import { bundleReducer } from './bundle/reducer';

/**
 * The application's state.
 */
export const store = createStore(
  bundleReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);