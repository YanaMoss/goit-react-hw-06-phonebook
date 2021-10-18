import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import types from './phonebook-types';

export const addContact = createAction(types.ADD, (name, number) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});
// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

export const deleteContact = createAction(types.DELETE);
// const deleteContact = todoId => ({
//   type: types.DELETE,
//   payload: todoId,
// });

export const filterContact = createAction(types.FILTER);
// const filterContact = value => ({
//   type: types.FILTER,
//   payload: value,
// });
