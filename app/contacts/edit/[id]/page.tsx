'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useContacts } from '../../../contexts/ContactsContext';

// A form used to edit an existing Contact object stored in ContactsContext
export default function Edit() {
  const router = useRouter();
  const { id } = useParams();
  const { editContact, getContact } = useContacts();
  const contact = getContact(id);

  // Creates local state for each form field
  const [picture, setPicture] = useState(contact.picture);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);

  // Update context with the new Contact object properties
  const handleSubmitClick = () => {
    editContact({ ...contact, picture, name, email, phoneNumber });
    router.push('/contacts');
  }

  return (
    <div className='container'>
      <h1>Edit Contact</h1>
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
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <br/>

        <label>Email</label>
        <input
          type='text'
          className='form-control'
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <br/>

        <label>Phone Number</label>
        <input
          type='text'
          className='form-control'
          onChange={(event) => setPhoneNumber(event.target.value)}
          value={phoneNumber}
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