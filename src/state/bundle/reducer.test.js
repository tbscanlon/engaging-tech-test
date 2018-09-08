import { bundleReducer as reducer, initialState } from './reducer';
import { actions } from './actions';

const ITEMS = [
  {
    id: 10001,
    name: "15,6 inch Laptop bag M43",
    category: "laptopBags",
    price: 18.99
  },
  {
    id: 10002,
    name: "15,6 inch  Laptop bag M44",
    category: "laptopBags",
    price: 16.99
  },
  {
    id: 10003,
    name: "Huxton Laptop bag 15,6 Inch",
    category: "laptopBags",
    price: 32.9
  },
]
const EMPTY_STATE = initialState
const STATE = {
  items: ITEMS,
  bundle: []
};
const STATE_WITH_BUNDLE = {
  items: ITEMS,
  bundle: ITEMS
}
const INVALID_ID = 1234565;

describe('[Reducer] Bundle', () => {
  let testState;
  let result;

  describe('Loading items', () => {
    it('Adds loaded items to the state', () => {
      result = reducer(EMPTY_STATE, actions.load(ITEMS));
      expect(result.items).toEqual(ITEMS);
    });
  });

  describe('Adding items to the bundle', () => {
    it('Adds the selected item to the bundle array', () => {
      result = reducer(STATE, actions.add(ITEMS[0]));
      expect(result.bundle).toContain(ITEMS[0]);
    });

    it('Adds subsequent items to the bundle', () => {
      testState = reducer(STATE, actions.add(ITEMS[0]));
      result = reducer(testState, actions.add(ITEMS[1]));
      expect(result.bundle).toEqual([ITEMS[0], ITEMS[1]]);
    });
  });

  describe('Removing items from the bundle', () => {
    it('Removes items from the bundle', () => {
      result = reducer(STATE_WITH_BUNDLE, actions.remove(ITEMS[0].id));
      expect(result.bundle).not.toContain(ITEMS[0]);
    });

    it('Does not modify the bundle if the item ID cannot be found', () => {
      result = reducer(STATE_WITH_BUNDLE, actions.remove(INVALID_ID));
      expect(result.bundle).toEqual(STATE_WITH_BUNDLE.bundle);
    })
  });

  describe('By default', () => {
    it('Returns the existing state', () => {
      result = reducer(STATE, 'very wrong action');
      expect(result).toEqual(STATE);
    });
  });
});