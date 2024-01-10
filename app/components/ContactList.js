import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link href={`/contacts/${contact.id}`}>
              <a>{contact.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={`/contacts/${contacts.id}`}>
  <a title={`View details for ${contacts.name}`}>{contact.name}</a>
        <a>Add Contact</a>
      </Link>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
