'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserContext from './contexts/UserContext';
import contactsAPI from './contactsAPI.json';

const inter = Inter({ subsets: ['latin'] })

const userContextValue = {
  contacts: contactsAPI.contacts,
  setContacts: function(newContact) {
    this.contacts = [...this.contacts, newContact]
  }
};

export default function RootLayout({ children }) {
  console.log(children)
  return (
    <html lang="en">
      <body className={inter.className}><UserContext.Provider value={userContextValue}>{children}</UserContext.Provider></body>
    </html>
  )
}
