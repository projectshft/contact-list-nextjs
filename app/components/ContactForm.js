import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const ContactForm = ({ onSubmit }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(''); 
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, image, phone }); 
    router.push('/contact-list-nextjs');
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} 
          />
        </label>
        <br />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
