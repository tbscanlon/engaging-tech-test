import { types } from './actions';

/**
 * What the bundle's state looks like by default.
 * (on application start-up)
 */
export const initialState = {
  items: [],
  bundle: []
};

/**
 * Manipulates the bundle's state.
 * @param {State} state The current bundle state.
 * @param {Action} action The action to perform to change the
 * current state.
 * @returns {State} The new bundle state.
 */
export const bundleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LoadItems:
      return { ...state, items: action.payload};

    case types.Add:
      return {
        ...state,
        bundle: [...state.bundle, state.items.find(item => item.id === action.payload)]
      };
    
    case types.Remove:
      return {
        ...state,
        bundle: state.bundle.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
}