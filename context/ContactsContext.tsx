"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { sortedContacts } from "@SeedData/contacts";

export type Contact = {
  name: string;
  url: string;
  email: string;
  phone: string;
};

type ContactsContextType = {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
};

const ContactsContext = createContext<ContactsContextType | undefined>(
  undefined
);

export function ContactsProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>(sortedContacts);

  const addContact = (contact: Contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  return (
    <ContactsContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error("useContacts must be used within a ContactsProvider");
  }
  return context;
}
