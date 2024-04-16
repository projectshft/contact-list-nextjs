"use client"
import { createContext, useContext, useState } from "react";
import { ContactsData } from '../data/contactsData';

const ContactsContext = createContext(ContactsData);

export const useContacts = () => useContext(ContactsContext);

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(ContactsData);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const editContact = (id, picture, name, email, phoneNumber) => {
    const matchingContact = contacts.find((contact) => contact.id == id);
    matchingContact.picture = picture;
    matchingContact.name = name;
    matchingContact.email = email;
    matchingContact.phoneNumber = phoneNumber;
  };

  const removeContact = (filteredContact) => {
    const filteredContacts = contacts.filter((contact) => contact !== filteredContact);
    setContacts([...filteredContacts]);
  };

  const contextValue = { contacts, addContact, editContact, removeContact }

  return (
    <ContactsContext.Provider value={contextValue}>
      {children}
    </ContactsContext.Provider>
  );
}