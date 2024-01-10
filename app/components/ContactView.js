// components/ContactView.js
import React from 'react';
import { useState } from 'next/dist/shared/lib/html-context.shared-runtime';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ContactView = ({ contact, onBack }) => {
  return (
    <div>
      <h2>Contact View</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone Number: {contact.phone_number}</p>
      <Link href="/contacts">
  <a onClick={onBack} title="Go back to contact list">Back</a>
</Link>
    </div>
  );
};

ContactView.propTypes = {
  contact: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ContactView;


