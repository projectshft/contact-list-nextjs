'use client';
import Link from 'next/link';
import { AllContacts } from '../components/allContacts';

export default function Home() {
  return (
    <main className='container'>
      <div className='col-12 text-center'>
        <h1>All Contacts</h1>
        <Link href={'./contacts/new'}>
          <button className='btn btn-primary'>Add Contact</button>
        </Link>
      </div>
      <br/>
        <AllContacts/>
    </main>
  );
}