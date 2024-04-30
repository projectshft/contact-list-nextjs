"use client"
import { createContext, useContext, useState } from "react";
import { ContactsData } from '../data/contactsData';

// A type to define the contents of each Contact object
export interface Contact {
  id: number;
  picture: string;
  name: string;
  email: string;
  phoneNumber: string | number;
}

// A type to define the contents of the ContactsContext object
interface ContactsContextType {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  editContact: (contact: Contact) => void;
  removeContact: (contact: Contact) => void;
  getContact: (id: string | string[]) => Contact;
}

// Creates and exports context for contacts (initially undefined)
export const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

// Creates a custom hook to use the ContactsContext
export const useContacts = () => useContext(ContactsContext);

// A provider component to provide the data and functions from context
export const ContactsProvider = ({ children }) => {
  
  const [contacts, setContacts] = useState<Contact[]>(ContactsData);

  // Adds a Contact object to the contacts array
  const addContact = (newContact: Contact) => {
    setContacts([...contacts, newContact]);
  };

  // Edits an existing Contact object on the contacts array
  const editContact = (selectedContact: Contact) => {
    const updatedContacts = contacts.map((contact) => contact.id === selectedContact.id ? {...contact, ...selectedContact } : contact);
    setContacts(updatedContacts);
  };

  // Replaces the exiting contacts array with a new array that excludes the deleted contact
  const removeContact = (filteredContact: Contact) => {
    const filteredContacts = contacts.filter((contact) => contact !== filteredContact);
    setContacts([...filteredContacts]);
  };

  // Gets a Contact object by id
  const getContact = (id: string) => {
    const numericId = parseInt(id);
    return contacts.find((sourceContact) => sourceContact.id === numericId);
  }

  const contextValue = { contacts, addContact, editContact, removeContact, getContact }

  return (
    <ContactsContext.Provider value={contextValue}>
      {children}
    </ContactsContext.Provider>
  );
}