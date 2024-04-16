'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import ContactList from './components/ContactList';

const IndexPage = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Albert Einstein', email: 'albert@einstein.com', phone: '123-456-7890' },
  ]);

  const handleAddContact = () => {
    console.log('Adding new contact...');
    const newContact = {
      id: contacts.length + 1,
      name: `New Contact ${contacts.length + 1}`,
      email: 'new@example.com',
      phone: '000-000-0000'
    };
    console.log('New contact:', newContact);
    setContacts(prevContacts => [...prevContacts, newContact]);
    console.log('Updated contacts:', contacts);
  };

  return (
    <div>
      <h1> Contact List </h1>
      <ContactList contacts={contacts} />
      <button onClick={handleAddContact}>Add New Contact</button>
      <br />
      <Link href="/add-contact">
        Add Contact (Form)
      </Link>
    </div>
  );
};

export default IndexPage;