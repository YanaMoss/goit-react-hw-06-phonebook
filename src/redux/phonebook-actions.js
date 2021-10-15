import { v4 as uuidv4 } from 'uuid';
import types from './phonebook-types';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = todoId => ({
  type: types.DELETE,
  payload: todoId,
});

const filter = value => ({
  type: types.FILTER,
  payload: value,
});

export { addContact, deleteContact, filter };
