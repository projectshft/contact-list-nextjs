import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => (
  <div>
    <h2>Contact List</h2>
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Link to={`/contacts/view/${contact.id}`}>{contact.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
