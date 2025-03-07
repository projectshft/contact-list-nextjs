'use client';
import { useState } from 'react';
import ContactList from './components/ContactList';
import { ContactAPI } from './data/ContactAPI';
import AllContactsHeader from './components/AllContactsHeader';

export default function Home() {
  const [allContacts, _] = useState(ContactAPI.all());
  
  return (
    <>
      <AllContactsHeader/>
      <div className='row'>
        <ContactList contacts={allContacts} />
      </div>
    </>
  );
}