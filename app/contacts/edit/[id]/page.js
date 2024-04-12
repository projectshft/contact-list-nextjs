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
    editContact(id, name, email, phoneNumber);
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

        <label>Number</label>
        <input
          type='text'
          className='form-control'
          onChange={(event) => setNumber(event.target.value)}
          value={phoneNumber}
        />

        <button type='button' onClick={handleSubmitClick}>Submit</button>
      </form>

      <Link href={'/contacts'}>Contacts</Link>
    </div>
  );
}