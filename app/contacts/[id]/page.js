'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
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
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>
            {contact.name}
          </h1>
          <Image
          src={contact.picture}
          alt='profile picture'
          width={100}
          height={100}
          />
          {/* <img src={contact.picture} alt='profile picture'></img> */}
          <h2>Email: {contact.email}</h2>
          <h2>Phone: {contact.phoneNumber}</h2>
          <Link href='/contacts'>Back</Link>
        </div>
      </div>
    </div>
  )
}