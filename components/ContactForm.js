
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [number, setNumber] = useState('');

  const handleClick = () => {
    const contact = {
      id: uuidv4(),
      name,
      email,
      image_url: image,
      phone_number: number,
    };
    props.addContact(contact);

    // Clear the form after adding a contact
    setName('');
    setEmail('');
    setImage('');
    setNumber('');
  };

  return (
    <form className='post-form'>
      
			<h1>Add a New Contact</h1>

      <div className='form-group'><label>Name</label>
        <input
          className='form-control'
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder='Enter Name'
        />

        <br/>
       
			  <div>
          <label>Email</label>
          <input
            className='form-control'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Enter Email'
          />
        </div>

        <div>
          <label>Image Url</label>
          <input
            className='form-control'
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder='Enter Image URL'
          />
        </div>

       
			  <div>
          <label>Phone Number</label>
          <input
            className='form-control'
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            placeholder='Enter Phone Number'
          />
        </div>
      </div>

      
			<button
        onClick={handleClick}
        type='button'
        className='btn btn-primary'
      > ADD NEW CONTACT </button>
    </form>
  );
};

export default ContactForm;
