import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import types from './phonebook-types';

const items = createReducer([], {
  [types.ADD]: (state, action) => [...state, action.payload],
  [types.DELETE]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };
const filter = createReducer('', {
  [types.FILTER]: (_, action) => action.payload,
});
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
