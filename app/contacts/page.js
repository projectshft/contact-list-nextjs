'use client';
import { useState } from 'react';
import { ContactAPI } from '../data/ContactAPI';
import ContactList from '../components/ContactList';
import AllContactsHeader from '../components/AllContactsHeader';

export default function Contact() {
	const [allContacts, _] = useState(ContactAPI.all());

	  return (
      <>
        <AllContactsHeader />
        <div className='row'>
          <ContactList contacts={allContacts} />
        </div>
      </>
    );
  }