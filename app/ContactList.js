'use client';
import React from 'react';
import Image from 'next/image';

const ContactList = ({ contacts }) => {

  return (
    <table className='table table-hover text-center w-75 table-responsive'>
      <thead>
        <tr>
        <th>Profile Pic</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
        <tr key={contact.id}>
          <td><Image alt='profile-pic' src={contact.image_url} /></td>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone_number}</td>
          <td></td>
        </tr>))
        }
      </tbody>
    </table>
  );
};

export default ContactList;