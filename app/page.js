'use client';
import React from 'react';
import Link from 'next/link';
import List from './components/List';
import { ContactListAPI } from './data/ContactListAPI';


export default function Home() {

  const contacts = ContactListAPI.contacts;

  return (
    <>
      <h1>Home Page</h1>
      <Link href="/contacts/new">Add New</Link>
      <List contacts={contacts} />
    </>
  )
}
