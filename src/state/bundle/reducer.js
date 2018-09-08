import { types } from './actions';

export const initialState = {
  items: [],
  bundle: []
};

export const bundleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LoadItems:
      return { ...state, items: action.payload};

    case types.Add:
      return {
        ...state,
        bundle: [...state.bundle, action.payload]
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