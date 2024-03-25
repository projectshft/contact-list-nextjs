'use client';
import React, { useState } from "react";
import Link from "next/link";

export default function AllContactsList({ contacts }) {

  console.log(contacts, "main");


  return (
    <>
      <div className='contact-data-header'>
      <p>Pic</p>
      <p className='contact-header-name'>Name</p>
      <p>Email</p>
      <p>Phone</p>
      <p></p>
      <p></p>
      </div>
    
      <div className='contact-data-container'>
        {contacts.map((contact, index) => (
          <div className='contact-data' key={index}>
                <img className='contact-data-url' src={contact.url} alt={contact.name} />
                <p className='contact-data-info'><Link href={`/contacts/:${contact.name}`}>{contact.name}</Link></p>


                <p className='contact-data-info'><Link href={`/contacts/:${contact.name}`}>{contact.email}</Link></p>
                <p className='contact-data-info'>{contact.phone}</p>
            <button className='button button-edit contact-data-edit'>
              Edit
            </button>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};
