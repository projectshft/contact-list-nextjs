'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserContext from './contexts/UserContext';
import contactsAPI from './contactsAPI.json';
import ContactListItem from './ContactListItem';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] })

const checkForContacts = () => {
  if(typeof window !== 'undefined') {
  const storedContacts = JSON.parse(localStorage.getItem('contacts'));
   console.log(storedContacts)
  if (!storedContacts) {
    return contactsAPI.contacts;
  } else {
    return storedContacts;
  }
}};

const userContextValue = {
  contacts: checkForContacts(),
  add: function(newContact) {
    this.contacts = [...this.contacts, newContact]
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  },
  get: function(id) {
    let contact = this.contacts.find((obj) => obj.id == id)
    return contact;
  },
  delete: function(id) {
    let newContacts = this.contacts.filter((obj) => obj.id !== id)
    this.contacts = newContacts
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  },
  edit: function(prevContact, editedContact) {
    let i = this.contacts.indexOf(prevContact)
    this.contacts.splice(i, 1, editedContact)
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><SessionProvider><UserContext.Provider value={userContextValue}>{children}</UserContext.Provider></SessionProvider></body>
    </html>
  )
}
