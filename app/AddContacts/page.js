'use client';
import React, { useState } from "react";
import Header from "../Header/page";

export default function AddContacts({ addContact }) {
  const [inputName, setInputName] = useState('');

  const handleInputName = (e) => {
    const inputName = e.target.value;
    setInputName(e.target.value);
    console.log(e.target.value);
  };
  const handleClickAdd = () => {
    const newContact = {
      name: inputName,
      url: '',
      email: '',
      phone: ''
     };
     addContact(newContact);
     setInputName('');
  };


  return (
    <>
      <Header />
      <h2>Add Contacts</h2>
      <div className='add-contact-container'>
        <h3>Name</h3>
        <input className='input input-add' placeholder='Contact name' onChange={handleInputName}></input>
        <h3>Picture</h3>
        <input className='input input-add' placeholder='Contact url'></input>
        <h3>Email</h3>
        <input className='input input-add' placeholder='Contact email'></input>
        <h3>Phone</h3>
        <input className='input input-add' placeholder='Contact phone'></input>
      </div>
      <div className="button-add-bar">
        <button className='button button-add' onClick={handleClickAdd}>Add</button>
      </div>


    </>
  )
}