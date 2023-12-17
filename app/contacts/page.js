'use client';
import ContactList from '../ContactList';
import Link from 'next/link';

export default function Home() {

  return (
    <main>
      <h1>All Contacts</h1>
      <Link href='/contacts/new'><button className='btn btn-primary add-contact d-block m-2 mw-100'>ADD CONTACT</button></Link>
      <input type='text' placeholder='Search Contacts' className='search w-75 mt-2'></input>
      <ContactList />
    </main>
  )
}
