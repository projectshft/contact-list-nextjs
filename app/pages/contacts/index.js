// pages/contacts/index.js
import React from 'react';
import Link from 'next/link';
import ContactList from '../../components/ContactList';

const ContactsPage = () => {
  // You may fetch contacts data here or use a state management library

  // For now, let's assume you have some static contacts data
  const contactsData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more contacts as needed
  ];

  return (
    <div>
      <h1>Contact List</h1>
      <ContactList contacts={contactsData} />

      <Link href="/contacts/new">
        <a>Add Contact</a>
      </Link>
    </div>
  );
};

export default ContactsPage;
