'use client';
import React from 'react';
import UserContext from './contexts/UserContext';
import { useRouter } from 'next/navigation';
import contactsAPI from './contactsAPI';
import { useContext, useState, useEffect } from 'react';
import ContactListItem from './ContactListItem';

const ContactList = () => {

  const context = useContext(UserContext)
  const [table, setTable] = useState([])

  useEffect(() => {
    setTable(context.contacts.map((contact) => {
      return <ContactListItem 
        contact={contact}
        key={contact.id}
        setTable={setTable}
      />
  }))
  }, [context.contacts])

  return (
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
  );
};

export default ContactList;