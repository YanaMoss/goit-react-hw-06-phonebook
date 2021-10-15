import React from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ItemContact } from './Contacts.styled';
import { ItemListContact } from './Contacts.styled';
import { Button } from '../Button/Button';
import { List } from './Contacts.styled';
import { deleteContact } from '../../redux/phonebook-actions';

export function ContactList() {
  const contacts = useSelector(state =>
    getListContact(state.phonebook.items, state.phonebook.filter),
  );
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ItemListContact key={id}>
          <ItemContact>{name}:</ItemContact>
          <ItemContact>{number}</ItemContact>
          <Button
            title={'Delete'}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          />
        </ItemListContact>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  phonebook: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.func,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};

const getListContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

export default connect(ContactList);
