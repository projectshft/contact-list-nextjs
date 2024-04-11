'use client';
import { useState, useContext } from 'react';;
import Link from 'next/link';
import { useContacts } from './contexts/ContactsContext';

function ContactRow( {key, contacts, contact} ) {
  return (
    <tr>
      <td><img src={contact.picture}/></td>
      <td>
         <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
      </td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td><button>Edit</button></td> {/*<a href='/contacts/edit'>Edit</a>*/}
      <td><button>Remove</button></td> {/*<a href='/contacts/remove'>Remove</a>*/}
    </tr>
  );
}

export default function Home() {
  
  const { contacts = [] } = useContacts();

  return (
    <main>
      <div>
        <h1>All Contacts</h1>
        <Link href={'./contacts/new'}>
          <button>Add Contact</button>
        </Link>
        <input placeholder='Search Contacts'></input>
        <table>
          <thead>
            <tr>
              <th>picture</th>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (<ContactRow key={contact.id} contact={contact}/>))}
          </tbody>
        </table>
      </div>
    </main>
  );
}