'use client';
import React from 'react'
import styles from './page.module.css';
import UserContext from '@/app/contexts/UserContext';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';

const AddNew = () => {

  const context = useContext(UserContext)
  const router = useRouter()

  const generateID = () => Math.round(Math.random() * 100000000)

  const addContact = (e) => {
    e.preventDefault()
    context.add({
      "id": generateID(),
      "name": e.target.name.value,
      "image_url": e.target.pic.value ? e.target.pic.value : "https://live.staticflickr.com/65535/53404496350_408dd51038_b.jpg",
      "email": e.target.email.value,
      "phone_number": e.target.phone.value
    })
    router.push('/contacts')   
  }

  return (
    <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
      <h1>Add New Contact</h1>
      <div className='w-50'>
        <form 
          className='d-flex flex-column align-items-center justify-content-center p-3 shadow' 
          onSubmit={(e) => addContact(e)}
        >
          <label className='mt-3' htmlFor='new-name'>Name</label>
          <input className='form-control' type='text' id='new-name' placeholder='Enter name' name='name'></input>
          <label className='mt-3' htmlFor='new-email'>Email</label>
          <input className='form-control' type='email' id='new-email' placeholder='Enter email' name='email'></input>
          <label className='mt-3' htmlFor='new-profile-pic'>Profile Pic</label>
          <input className='form-control' type='text' id='new-profile-pic' placeholder='Enter URL to Image' name='pic'></input>
          <label className='mt-3' htmlFor='new-phone-number'>Phone Number</label>
          <input className='form-control' type='name' id='new-phone-number' placeholder='Enter phone number' name='phone'></input>
          <button className='btn btn-primary mt-3' type='submit'>ADD</button>
        </form>
        </div>
    </div>
  )
}

export default AddNew;