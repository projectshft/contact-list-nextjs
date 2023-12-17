'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserContext from './contexts/UserContext';
import contactsAPI from './contactsAPI.json';

const inter = Inter({ subsets: ['latin'] })

const checkForContacts = () => {
  const storedContacts = JSON.parse(localStorage.getItem('contacts'));
   console.log(storedContacts)
  if (!storedContacts) {
    return contactsAPI.contacts;
  } else {
    return storedContacts;
  }
};

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
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><UserContext.Provider value={userContextValue}>{children}</UserContext.Provider></body>
    </html>
  )
}
