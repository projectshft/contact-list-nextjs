'use client';
import React from 'react';
import UserContext from './contexts/UserContext';
import { useContext, useState, useEffect } from 'react';
import ContactListItem from './ContactListItem';

const ContactList = () => {

  const context = useContext(UserContext);
  const [table, setTable] = useState([]);

  useEffect(() => {
    console.log(context)
    setTable(context.contacts.map((contact) => {
      return <ContactListItem 
        contact={contact}
        key={contact.id}
        setTable={setTable}
      />
  }));
  }, [context]);

  const handleSearchInput = (e) => {
    
    let filteredContacts = context.contacts.filter((contact) => {
      let lowerContact = contact.name.toLowerCase()
      return lowerContact.includes(e.target.value)
    });

    setTable(filteredContacts.map((contact) => {
      return <ContactListItem 
        contact={contact}
        key={contact.id}
        setTable={setTable}
      />
    }));
  };

  return (
    <div className='w-100 d-flex flex-column align-items-center'>
    <input type='text' placeholder='Search Contacts' className='search w-75 mt-2' onChange={((e) => handleSearchInput(e))}></input>
    <table className='table table-hover text-center w-75 table-responsive'>
      <thead>
        <tr>
        <th>Profile Pic</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
        </tr>
      </thead>
      <tbody>
        {table}
      </tbody>
    </table>
    </div>
  );
  
};

export default ContactList;