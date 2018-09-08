import { getBundleTotal, getCategoryBreakdown, getBundle, getItems } from './selectors';

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
    category: "antiviruses",
    price: 16.99
  },
  {
    id: 10003,
    name: "Huxton Laptop bag 15,6 Inch",
    category: "mice",
    price: 32.9
  },
  {
    id: 10004,
    name: "Huxton Laptop bag 15,6 Inch",
    category: "offices",
    price: 32.9
  },
  {
    id: 10005,
    name: "Huxton Laptop bag 15,6 Inch",
    category: "offices",
    price: 32.9
  },
]
const POPULATED_STATE = {
  items: ITEMS,
  bundle: ITEMS
};

const TOTAL =
  ITEMS[0].price +
  ITEMS[1].price +
  ITEMS[2].price +
  ITEMS[3].price +
  ITEMS[4].price;

const CATEGORY_BREAKDOWN = {
  laptopBags: 1,
  antiviruses: 1,
  mice: 1,
  offices: 2
};

describe('[Selectors] Bundle', () => {
  let result;

  describe('#getBundleTotal', () => {
    it('Sums the prices of all the items in the bundle', () => {
      result = getBundleTotal(POPULATED_STATE);
      expect(result).toEqual(TOTAL);
    });
  });

  describe('#getCategoryBreakdown', () => {
    it('Creates a breakdown of number of products per category', () => {
      result = getCategoryBreakdown(POPULATED_STATE);
      expect(result).toEqual(CATEGORY_BREAKDOWN);
    });
  });

  describe('#getBundle', () => {
    it('Returns the current bundle', () => {
      result = getBundle(POPULATED_STATE);
      expect(result).toEqual(ITEMS);
    });
  });

  describe('#getItems', () => {
    it('Returns the loaded items', () => {
      result = getItems(POPULATED_STATE);
      expect(result).toEqual(ITEMS);
    });
  });
});