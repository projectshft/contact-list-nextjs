'use client';
import React from 'react';
import Link from 'next/link';
import List from '../components/List.js';
import { ContactListAPI } from '../data/ContactListAPI.js';


export default function Home() {

  const contacts = ContactListAPI.contacts;

  return (
    <>
      <h1>Contacts Page</h1>
      <Link href="/contacts/new">Add New</Link>
      <List contacts={contacts} />
    </>
  )
}
