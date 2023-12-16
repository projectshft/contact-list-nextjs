'use client';
import ContactList from '../ContactList';
import contactsAPI from '../contactsAPI';
import { useState } from 'react';

export default function Home() {

  const [contacts, setContacts] = useState(contactsAPI.contacts);

  return (
    <main>
      <h1>All Contacts</h1>
      <button className='btn btn-primary add-contact d-block m-2 mw-100'>ADD CONTACT</button>
      <input type='text' placeholder='Search Contacts' className='search w-75 mt-2'></input>
      <ContactList contacts={contacts} />
    </main>
  )
}
