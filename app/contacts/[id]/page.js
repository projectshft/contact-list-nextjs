'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ContactAPI } from '../../ContactAPI';

// function that checks to make sure the contact is there before displaying
export default function Contact() {
  const { id } = useParams();
  const contact = ContactAPI.get(parseInt(id, 10));
  

  if (!contact) {
    return <div>Sorry, but the contact you are looking for was not found.</div>
  }

  // JSX that shows contact information
  return (
    <main>
      <div style={{textAlign: 'center'}}>
        <h1>Contact Info</h1>
        <Link href='/contacts'>Back</Link>
        <p style={{paddingTop: 15}}><strong>{contact.name}</strong></p>
        <img className='img-thumbnail col-md-3' style={{display: 'inline-block'}} src={contact.imageUrl}></img>
        <p style={{paddingTop: 15}}>{contact.email}</p>
        <p>{contact.number}</p>
        <Link style={{paddingRight: 15}} href=''>Edit</Link>
        <Link href=''>Delete</Link>
      </div>
    </main>
  )
}