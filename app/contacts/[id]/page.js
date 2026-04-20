'use client';

import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ContactAPI } from '@/app/data/contactsAPI';

export default function ContactInfo() {
  const { id } = useParams();
  const contact = ContactAPI.get(parseInt(id, 10));

  if (!contact) {
    return (
      <Container className="contacs-div">
        <h2>That contact was not found</h2>
        <Link href="/">Home</Link>
      </Container>
    );
  }

  return (
    <main>
      <Container>
        <h1>Contact Info</h1>
        <div>
          <Link href="/">Back</Link>
        </div>
        <h2>{contact.name}</h2>
        <div className="contact-info">
          <img src={contact.image} alt={`${contact.name}'s profile picture.`} />
        </div>
        <div>{contact.email}</div>
        <div>{contact.phoneNumber}</div>
      </Container>
    </main>
  );
}
