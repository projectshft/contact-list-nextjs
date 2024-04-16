'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useContacts } from '../../contexts/ContactsContext';

export default function NewContact() {
  const router = useRouter();
  
  // Pull initial data from context
  const { contacts, addContact } = useContacts();

  // Set state
  const [picture, setPicture] = useState('/default-profile-picture.jpg');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setNumber] = useState('');
    
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
    <div className='container'>
      <h1>Add New Contact</h1>
      <form>
        <label>Profile Picture</label>
        <input
          type='text'
          className='form-control'
          value={picture}
          onChange={(event) => setPicture(event.target.value)}
          placeholder='Enter picture url'
        />
        <br/>
        
        <label>Name</label>
        <input
          type='text'
          className='form-control'
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder='Enter name'
        />
        <br/>

        <label>Email</label>
        <input
          type='text'
          className='form-control'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='Enter email'
          required
        />
        <br/>

        <label>Phone Number</label>
        <input
          type='text'
          className='form-control'
          value={phoneNumber}
          onChange={(event) => setNumber(event.target.value)}
          placeholder='Enter phone number'
        />
        <br/>

        <button 
          type='button'
          onClick={handleSubmitClick}
          className='btn btn-primary btn-sm'
        >Submit</button>
      </form>

      <Link href={'/contacts'}>Back</Link>
    </div>
  );
}