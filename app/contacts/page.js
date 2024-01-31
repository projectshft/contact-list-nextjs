'use client';
import { useState } from 'react';
import { ContactsAPI } from '../data/contactsAPI';
import Link from 'next/link';
import SearchContacts from '../components/SearchContacts.js';
import { ContactList } from '../components/ContactList.js';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Contacts() {
	const [allContacts, setAllContacts] = useState(ContactsAPI.getAll());
  const [searchedContact, setSearchedContact] = useState(allContacts);

  const contactSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setSearchedContact(allContacts);
    } else {
      const filteredContact = allContacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedContact(filteredContact);
    }
  };

  const handleDelete = (id) => {
    const newContacts = allContacts.filter((contact) => contact !== id);
    setAllContacts(newContacts);
    contactsAPI.deleteContact(id);
  };

	return (
			<div className='container mt-6 text-center'>
				<h1 className='display-6 text-center mb-6'>All Contacts</h1>
				<Link href="/contacts/new" className=" mb-2 btn btn-primary">
        Add Contact
      </Link>
      <SearchContacts onSearchTermChange={contactSearch} />
      <ContactList handleDelete={handleDelete} contacts={searchedContact} />
  
			</div>
	);
}