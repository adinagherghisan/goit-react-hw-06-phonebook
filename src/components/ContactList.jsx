// src/components/ContactList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../features/contactsSlice';

function ContactList() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(removeContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
