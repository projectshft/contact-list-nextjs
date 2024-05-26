'use client'
import React from 'react';
import Form from '../../components/Form.js';
import { ContactListAPI } from '@/app/data/ContactListAPI.js';
import Link from 'next/link.js';


export default function New() {

  const addContact = ContactListAPI.addContact;

  return (
    <>
      <h1>Add New Contact</h1>
      <Link href="/contacts">Cancel</Link>
      <Form addContact={addContact} />
    </>
  );
}