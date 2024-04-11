"use client"
import { createContext, useContext, useState } from "react";
import { ContactsData } from '../data/contactsData';

const ContactsContext = createContext(ContactsData);

export const useContacts = () => useContext(ContactsContext);

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(ContactsData);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const contextValue = { contacts, addContact }

  return (
    <ContactsContext.Provider value={contextValue}>
      {children}
    </ContactsContext.Provider>
  );
}