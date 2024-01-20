import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ContactList from '../components/ContactList';
import contactsData from '../contacts.json';

export const Home = () => {
  const contacts = Array.isArray(contactsData.contacts)
    ? contactsData.contacts
    : [];

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Contacts</h1>
      <Link to="/contacts">Go to Contacts</Link>

      <Routes>
        <Route path="/contacts" element={<ContactList contacts={contacts} />} />
        {/* Other routes go here */}
      </Routes>
    </div>
  );
};

export default Home;
