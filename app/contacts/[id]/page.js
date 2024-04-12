'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useContext } from 'react';
import { useContacts } from '../../contexts/ContactsContext';

export default function Contact() {
  const { id } = useParams();
  const { contacts = [] } = useContacts();
  const contact = contacts.find((contact) => contact.id == id);

  if (!contact) {
    return (
      <div>Contact not found</div>
    );
  }

  return (
    <main>
      <div>
        <h1>
          {contact.name}
        </h1>
        <img src={contact.picture} alt='profile picture'></img>
        <h2>Email: {contact.email}</h2>
        <h2>Phone: {contact.phoneNumber}</h2>
        <Link href='/contacts'>Back</Link>
      </div>
    </main>
  )
}