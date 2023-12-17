'use client';
import React from 'react';
import Image from 'next/image';
import { useContext } from 'react';
import { useParams, useRouter } from 'next/navigation';
import UserContext from '@/app/contexts/UserContext';


const ContactView = () => {

  const { id } = useParams();
  const router = useRouter();

  const context = useContext(UserContext)

  let contact = context.get(id)

  const handleBackClick = () => {
    router.push('/contacts')
  }
  
  return (
    <div className='d-flex flex-column align-items-center justify-content-center position-relative'>
      <button className='btn btn-primary' onClick={() => handleBackClick()}>&lt;--</button>
      <h1 className='mt-2'>Contact Info</h1>
      <h2 className='mt-2'>{contact.name}</h2>
      <div className='position-relative d-block' style={{width: 200 + 'px', height: 200 + 'px'}}><Image alt='contact-pic' src={contact.image_url} fill style={{objectFit:'contain'}}/></div>
      <p className='mt-2'>{contact.email}</p>
      <p>{contact.phone_number}</p>

    </div>
  )
}

export default ContactView;