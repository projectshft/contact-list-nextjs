'use client'
import { ContactAPI } from '../../ContactAPI';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

// PropTypes
AddContact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired
};

// function that keeps the state of the form
export default function AddContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const router = useRouter();

  // generates a random ID# for each contact added
  const handleSubmitAddContactClick = () => {
    const generateId = () => Math.round(Math.random() * 100000000);
    const contactId = generateId();

  // function that takes in Contact data and pushes it to show all contacts page
    ContactAPI.addContact({
      id: contactId,
      name,
      email,
      number,
      imageUrl,
    });
    router.push('/contacts');
  };

  // JSX for add new contact form
  return (
    <div className='row'>
      <div style={{textAlign: 'center'}}>
        <h1>Submit Contact Info</h1>
        <form className='col-md-6 offset-md-3'>
          <label>Name</label>
          <input
          type='text'
          required
          className='form-control'
          value={name}
          onChange={(event) => setName(event.target.value)}
          
          />

          <br />

          <label>E-mail</label>
          <input
          type='text'
          required
          className='form-control'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          
          />

          <br />

          <label>Phone Number</label>
          <input
          type='text'
          required
          className='form-control'
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          
          />

          <br />

          <label>Image URL</label>
          <input
          type='text'
          required
          className='form-control'
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          
          />

          <br />

          <button 
          className='btn btn-dark'
          // button only able to be clicked when all fields are filled
          disabled={name === '' || email === '' || number === '' || imageUrl === ''} 
          type='button' 
          onClick={handleSubmitAddContactClick}>
					  Add Contact
				  </button>
			    </form>

        <p style={{paddingTop: 10}}><Link href='/contacts'>Back</Link></p>
        
      </div>
    </div>
  );
};

