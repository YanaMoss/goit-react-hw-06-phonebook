import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// import types from './phonebook-types';

const addContact = createAction('phonebook/add', (name, number) => {
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

const deleteContact = createAction('phonebook/delete');
// const deleteContact = todoId => ({
//   type: types.DELETE,
//   payload: todoId,
// });

const filterContact = createAction('phonebook/filter');
// const filterContact = value => ({
//   type: types.FILTER,
//   payload: value,
// });

export { addContact, deleteContact, filterContact };
