'use client';
import { useState, useContext } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useContacts } from '../../../contexts/ContactsContext';

export default function Edit() {
  const router = useRouter();
  const { id } = useParams();
  const { contacts = [] } = useContacts();
  const { editContact } = useContacts();
  const contact = contacts.find((contact) => contact.id == id);

  const [picture, setPicture] = useState(contact.picture);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phoneNumber, setNumber] = useState(contact.phoneNumber);

  const handleSubmitClick = () => {
    editContact(id, picture, name, email, phoneNumber);
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
          onChange={(event) => setNumber(event.target.value)}
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