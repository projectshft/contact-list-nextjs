'use client';
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useContacts } from '../../contexts/ContactsContext';

export default function AddContact() {
  const router = useRouter();
  
  // Pull initial data from context
  const { contacts, addContact } = useContacts();
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setNumber] = useState(null);
    
  // Gets data from the form and adds another contact object to the context data
  const handleSubmitClick = () => {
    // Get a new id between 0 and 1000
    const randInt = () => {
      return Math.floor(Math.random() * 1000);
    };
    let id = randInt();

    // Get an array of all the IDs from current context
    const ids = contacts.map((contact) => contact.id);

    // Iterate over the array to see if the new id exists already
    // contacts.includes()
    if (ids.includes(id)) {
      id = randInt();
    } 

    addContact({
      id,
      name,
      picture,
      email,
      phoneNumber,
    });
    router.push('/contacts');
  }
  
  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type='text'
          className='form-control'
          onChange={(event) => setName(event.target.value)}
        />

        <br/>

        <label>Email</label>
        <input
          type='text'
          className='form-control'
          onChange={(event) => setEmail(event.target.value)}
        />

        <br/>

        <label>Number</label>
        <input
          type='text'
          className='form-control'
          onChange={(event) => setNumber(event.target.value)}
        />

        <button type='button' onClick={handleSubmitClick}>Submit</button>
      </form>

      <Link href={'/contacts'}>Contacts</Link>
    </div>
  );
}