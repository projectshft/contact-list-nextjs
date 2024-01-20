import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  console.log({ contacts });
  return (
    <div>
      <h1>Contacts List</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/contacts/new">Add Contact</Link>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
