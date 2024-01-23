import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ContactList from '../components/ContactList';
import contactsData from '../contacts.json';
import AddContact from '../components/AddContacts';
import ContactView from '../components/ContactView';

export const Home = () => {
  const [contacts, setContacts] = React.useState(contactsData.contacts || []);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Contacts</h1>
      <br />
      <Link to="/contacts">View Contacts</Link>
      <br />
      <Link to="/contacts/add">Add Contact</Link>
      <Routes>
        <Route
          path="/contacts"
          element={<ContactList contacts={contacts} addContact={addContact} />}
        />
        <Route
          path="/contacts/add"
          element={<AddContact addContact={addContact} />}
        />
        <Route
          path="/contacts/view/:id"
          element={<ContactView contacts={contacts} />}
        />
      </Routes>
    </div>
  );
};

export default Home;
