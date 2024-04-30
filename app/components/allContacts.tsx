import { useState, useEffect, ChangeEvent } from 'react';
import { ContactsTable } from './contactsTable'
import { useContacts, Contact } from '../contexts/ContactsContext';

export function AllContacts() {
  const { contacts } = useContacts(); // Pulls the contacts array from context
  const [searchTerm, setSearchTerm] = useState('');

  // Make sure the type is an array of Contact objects
  const [searchResult, setSearchResult] = useState<Contact[]>([]);
  
  // Search term event handler
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Runs handleSearchResult after searchTerm changes
  useEffect(() => {
    // Looks for matches in the contacts array when the searchTerm is 3 or more characters
  const handleSearchResult = () => {
    if (searchTerm.length >= 3) {
      setSearchResult(() => {
        return contacts.filter((contact) => 
            contact?.name?.toLowerCase().includes(searchTerm.toLowerCase())
          );
      })
    } else {
      setSearchResult([]);
    }
  }
    
    handleSearchResult();
  }, [searchTerm, contacts]);


  return (
    <div className='col-12'>
      <input
        className='form-control'
        value={searchTerm}
        placeholder='Search Contacts by Name'
        onChange={(e) => { handleSearchChange(e) }}>
      </input>
      <br/>
      <ContactsTable contacts={contacts} matchingContact={searchResult}/>
    </div>
  );
};