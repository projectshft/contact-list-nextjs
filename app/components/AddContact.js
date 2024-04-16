import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const AddContact = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleSubmit = event => {
    event.preventDefault();
    if (!name || !email || !phone) {
      alert('Please fill in all fields');
      return;
    }
    const newContact = { name, email, phone };
    onAddContact(newContact);
    setName('');
    setEmail('');
    setPhone('');
    router.push('/contacts');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

AddContact.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default AddContact;
