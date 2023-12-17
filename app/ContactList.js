'use client';
import React from 'react';
import Image from 'next/image';
import UserContext from './contexts/UserContext';
import { useRouter } from 'next/navigation';
import contactsAPI from './contactsAPI';
import { useContext } from 'react';

const ContactList = () => {

  let context = useContext(UserContext)
  let contacts = context.contacts

  const router = useRouter();

  const handleContactClick = (e) => {
    router.push(`/contacts/${e.currentTarget.id}`)
  }

  const deleteContact = (id) => {
    contacts.find()
  }

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
        <tr 
          key={contact.id} 
          id={contact.id} 
          className='align-middle' 
          style={{height: 80 + 'px'}} 
          onClick={(e) => handleContactClick(e)
        }>
          <td 
            className='justify-content-center align-items-center d-flex' 
            style={{height: 80 + 'px '}}
          >
            <div 
              className='position-relative rounded-circle overflow-hidden' 
              style={{width: 50 + 'px', height: 50 + 'px'}}
            >
              <Image 
              alt='profile-pic' 
              src={contact.image_url} 
              layout={'fill'} 
              objectFit={'contain'} 
              />
            </div>
          </td>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone_number}</td>
          <td>
            <button 
              className='btn btn-secondary' 
              onClick={() => editContact(contact.id)}
            >
              edit
            </button>
            &nbsp;&nbsp;&nbsp;
            <button 
              className='btn btn-danger' 
              onClick={() => deleteContact(contact.id)}
            >
              delete
            </button>
          </td>
        </tr>))
        }
      </tbody>
    </table>
  );
};

export default ContactList;