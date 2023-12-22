'use client';
import React from 'react';
import ContactList from '../ContactList';
import Link from 'next/link';
import SignInButton from '../SignInButton';

const Home = () => {
  return (
    <main>
      <h1>All Contacts</h1>
      <SignInButton />
      <Link href='/contacts/new'><button className='btn btn-primary add-contact d-block m-2 mw-100'>ADD CONTACT</button></Link>
      <ContactList />
    </main>
  )
};

export default Home;
