// components/ContactList.js
import React from 'react';
import Link from 'next/link';
import contactsData from '../data/contacts.json';

const ContactList = () => {
  const { contacts } = contactsData;

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link href={`/contacts/${contact.id}`}>
              <a>{contact.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/contacts/new">
        <a>Add Contact</a>
      </Link>
    </div>
  );
};

export default ContactList;
