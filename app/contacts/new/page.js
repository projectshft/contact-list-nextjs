'use client';
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useContacts } from '../../contexts/ContactsContext';

export default function AddContact() {
  const router = useRouter();

  const { contacts, addContact } = useContacts();
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);

  const handleSubmitClick = () => {
    addContact({
      name,
      picture,
      email,
      number,
    });
    console.log("add ", contacts);
    router.push('/');
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

        <label>Number</label>
        <input
          type='text'
          className='form-control'
          onChange={(event) => setNumber(event.target.value)}
        />

        <br/>

        <label>Email</label>
        <input
          type='text'
          className='form-control'
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type='button' onClick={handleSubmitClick}>Submit</button>
      </form>

      <Link href={'/'}>Contacts</Link>
    </div>
  );
}