'use client';
import { useState, useContext } from 'react';;
import Link from 'next/link';
import { useContacts } from '../contexts/ContactsContext';

function Search() {
  const [term, setTerm] = useState('');
  
  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  console.log(term);
  
  return (
    <input value={term} placeholder='Search Contacts' onChange={handleChange}></input>
  );
};

function ContactRow({ key, contact }) {
  
  const { removeContact } = useContacts();

  const handleRemoveClick = () => {
    removeContact(contact);
  };
  
  return (
    <tr>
      <td><img src={contact.picture}/></td>
      <td>
         <Link href={`./contacts/${contact.id}`}>
            {contact.name}
          </Link>
      </td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <Link href={`./contacts/edit/${contact.id}`}>
          <button>Edit</button>
        </Link>
      </td>
      <td>
          <button onClick={handleRemoveClick}>Remove</button>
      </td>
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
        <Search/>
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