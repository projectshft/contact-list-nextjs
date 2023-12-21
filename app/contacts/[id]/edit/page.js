'use client';
import { useParams } from 'next/navigation';
import UserContext from '@/app/contexts/UserContext';
import { useContext, useState } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';

const EditPage = () => {

  const { id } = useParams();
  const context = useContext(UserContext);
  const router = useRouter();

  const contact = context.contacts.find(obj => obj.id == id);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [pic, setPic] = useState(contact.image_url === "https://live.staticflickr.com/65535/53404496350_408dd51038_b.jpg" ? '' : contact.image_url);
  const [phone, setPhone] = useState(contact.phone_number);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePicChange = (e) => {
    if (!e.target.value.startsWith("https://")) {
      e.target.value = "https://" + e.target.value.slice(8);
      e.target.setSelectionRange(8, 8);
    } ;
    setPic(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    let newContact = 
    {
      "id": contact.id,
      "name": name,
      "image_url": pic && pic !== "https://" ? pic : "https://live.staticflickr.com/65535/53404496350_408dd51038_b.jpg",
      "email": email,
      "phone_number": phone
    };
    context.edit(contact, newContact);
    router.push('/contacts');
  }

  return (
    <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
    <h1>Edit Contact </h1>
    <br /><h2>{contact.name}</h2>
    <div className='w-50'>
      <form 
        className='d-flex flex-column align-items-center justify-content-center p-3 shadow' 
        onSubmit={(e) => handleEditSubmit(e)}
      >
        <label className='mt-3' htmlFor='new-name'>Name</label>
        <input className='form-control' type='text' id='new-name' placeholder='Enter name' defaultValue={name} onChange={handleNameChange} name='name'></input>
        <label className='mt-3' htmlFor='new-email'>Email</label>
        <input className='form-control' type='email' id='new-email' placeholder='Enter email' name='email' defaultValue={email} onChange={handleEmailChange}></input>
        <label className='mt-3' htmlFor='new-profile-pic'>Profile Pic</label>
        <input className='form-control' type='text' id='new-profile-pic' placeholder='Enter URL to Image' name='pic' defaultValue={pic ? pic : 'https://'} onChange={handlePicChange}></input>
        <label className='mt-3' htmlFor='new-phone-number'>Phone Number</label>
        <input className='form-control' type='name' id='new-phone-number' placeholder='Enter phone number' name='phone' defaultValue={phone} onChange={handlePhoneChange}></input>
        <button className='btn btn-primary mt-3' type='submit'>SAVE</button>
      </form>
      </div>
  </div>
  )
};

export default EditPage;