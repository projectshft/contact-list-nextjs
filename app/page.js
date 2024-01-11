// pages/contacts/index.js
import React from 'react';
import ContactList from './components/ContactList';

const ContactsPage = () => {
  // Fetch contacts data or use a state management library
  const contacts = [
    // Sample contacts data
    {
      id: 1,
      name: 'John Doe',
      image_url: 'https://example.com/john-doe.jpg',
      email: 'john@example.com',
      phone_number: '1234567890',
    },
    // Add more contacts as needed
  ];

  return <ContactList contacts={contacts} />;
};

export default ContactsPage;
