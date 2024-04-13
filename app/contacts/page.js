'use client';
import { useState, useContext } from 'react';
import Link from 'next/link';
import { AllContacts } from '../components/allContacts';

export default function Home() {
  return (
    <main>
      <div>
        <h1>All Contacts</h1>
        <Link href={'./contacts/new'}>
          <button>Add Contact</button>
        </Link>
        <AllContacts/>
      </div>
    </main>
  );
}