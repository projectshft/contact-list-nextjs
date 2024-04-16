import { useState } from 'react';
import { ContactsTable } from './contactsTable'
import { useContacts } from '../contexts/ContactsContext';

export function AllContacts() {
  const { contacts = [] } = useContacts();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  };

  const handleSearchResult = (event) => {
    const nameResult = contacts.filter((contact) => 
      contact.name.toLowerCase() === event.target.value.toLowerCase()
    );
      
    setSearchResult(nameResult);
  }

  return (
    <div className='col-12'>
      <input
        className='form-control'
        value={searchTerm}
        placeholder='Search Contacts by Name'
        onChange={(e) => { handleSearchChange(e); handleSearchResult(e) }}>
      </input>
      <br/>
      <ContactsTable contacts={contacts} matchingContact={searchResult}/>
    </div>
  );
};