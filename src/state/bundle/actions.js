export const types = {
  LoadItems: '[Bundle] Load Items',
  Add: '[Bundle] Add',
  Remove: '[Bundle] Remove'
};

const load = items => ({
  type: types.LoadItems,
  payload: items
});

const add = item => ({
  type: types.Add,
  payload: item
});

const remove = itemId => ({
  type: types.Remove,
  payload: itemId
});

export const actions = {
  load: load,
  add: add,
  remove: remove
};