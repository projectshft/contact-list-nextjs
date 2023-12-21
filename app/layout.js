/*Note to the grader: I tried to use google contacts API to get the contacts and list them in the app. I was able to get authentification with google but have spent alot of time trying to figure out how to get the token_id to fetch the contacts. I think I need to understand OAuth a bit better which is covered at the end of the program to complete this extension, because I can't figure it out. So the app is able to login with google and create a session where you are the user, but right now it will not pull your contacts.*/

'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserContext from './contexts/UserContext';
import contactsAPI from './contactsAPI.json';
import { SessionProvider } from 'next-auth/react';



const inter = Inter({ subsets: ['latin'] });

const checkForContacts = () => {
  if(typeof window !== 'undefined') {
  const storedContacts = JSON.parse(localStorage.getItem('contacts'));
  if (!storedContacts) {
    return contactsAPI.contacts;
  } else {
    return storedContacts;
  };
}};

const userContextValue = {
  contacts: checkForContacts(),
  loggedIn: false,
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
  },
  setLoggedIn: function(bool) {
    this.loggedIn = bool;
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}><SessionProvider><UserContext.Provider value={userContextValue}>{children}</UserContext.Provider></SessionProvider></body>
    </html>
  )
};
