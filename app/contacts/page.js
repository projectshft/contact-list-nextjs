'use client';
import { useState, useContext } from 'react';;
import Link from 'next/link';
import { useContacts } from '../contexts/ContactsContext';

function AllContacts() {
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
    <div>
      <input 
        value={searchTerm}
        placeholder='Search Contacts by Name'
        onChange={(e) => { handleSearchChange(e); handleSearchResult(e) }}>
      </input>
      <ContactsTable contacts={contacts} matchingContact={searchResult}/>
    </div>
  );
};

function ContactsTable({ contacts, matchingContact }) {

  if (matchingContact.length > 0) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr className='table-dark'>
            <th scope='col'>picture</th>
            <th scope='col'>name</th>
            <th scope='col'>email</th>
            <th scope='col'>phone</th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {matchingContact.map((contact) => (<ContactRow key={contact.id} contact={contact}/>))}
        </tbody>
      </table>
    );
  }

  if (contacts.length >= 1) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr className='table-dark'>
            <th scope='col'>picture</th>
            <th scope='col'>name</th>
            <th scope='col'>email</th>
            <th scope='col'>phone</th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (<ContactRow key={contact.id} contact={contact}/>))}
        </tbody>
      </table>
    );
  }

  return (
    <table className='table table-striped'>
      <thead>
        <tr className='table-dark'>
          <th scope='col'>picture</th>
          <th scope='col'>name</th>
          <th scope='col'>email</th>
          <th scope='col'>phone</th>
          <th scope='col'></th>
          <th scope='col'></th>
        </tr>
      </thead>
    </table>
  );

}

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
        <AllContacts/>
      </div>
    </main>
  );
}