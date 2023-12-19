'use client';
import React from 'react'
import Image from 'next/image';
import { useContext } from 'react';
import UserContext from './contexts/UserContext';
import { useRouter } from 'next/navigation';
import ImageWithDefault from './ImageWithDefault';

const ContactListItem = (props) => {

  const context = useContext(UserContext);
  const router = useRouter();

  const handleRowClick = (id, e) => {
    // Check if the click originated from a button
    if (e && e.target && !e.target.matches('button')) {
      // Prevent navigation if the click did not originate from a button
      router.push(`/contacts/${id}`);
    }
  };

  const handleContactClick = (id, action) => {
    if (action === 'edit') {
      // Add your edit logic here
      router.push(`/contacts/edit/${id}`);
      
    } else if (action === 'delete') {
      if(confirm(`Are you sure you want to delete this contact?`)) {
      context.delete(id);
      props.setTable(context.tableContacts)
      }
    } else {
      router.push(`/contacts/${id}`);
    }
  };

  return (
    <tr 
      key={props.contact.id} 
      id={props.contact.id} 
      className='align-middle' 
      style={{height: 80 + 'px'}} 
      onClick={() => handleRowClick(props.contact.id)
    }>
      <td 
        className='justify-content-center align-items-center d-flex' 
        style={{height: 80 + 'px '}}
      >
        <div 
          className='position-relative rounded-circle overflow-hidden' 
          style={{width: 50 + 'px', height: 50 + 'px'}}
        >
          <ImageWithDefault 
          alt='profile-pic' 
          src={props.contact.image_url}
          defaultSrc = "https://live.staticflickr.com/65535/53404496350_408dd51038_b.jpg"
          contact={props.contact.name}
          fill
          sizes='(width: 100%)'
          />
        </div>
      </td>
      <td>{props.contact.name}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.phone_number}</td>
      <td>
        <button 
          className='btn btn-secondary'
          style={{zIndex: 100}}
          onClick={(e) => handleContactClick(props.contact.id, 'edit')}
        >
          edit
        </button>
        &nbsp;&nbsp;&nbsp;
        <button 
          className='btn btn-danger' 
          onClick={(e) => handleContactClick(props.contact.id, 'delete')}
        >
          delete
        </button>
      </td>
    </tr>
  )
}

export default ContactListItem