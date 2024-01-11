// components/ContactView.js
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'; // Fix: Import PropTypes correctly

const ContactView = ({ contactId }) => {
  // Fetch the contact details based on the contactId

  const contactDetails = {
    id: contactId,
    name: 'Albert Einstein',
    image_url:
      'https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
    email: 'aeinstein@example.com',
    phone_number: '15555555555',
  };

  return (
    <div>
      <h1>Contact Details</h1>
      <p>Name: {contactDetails.name}</p>
      <p>Email: {contactDetails.email}</p>
      <p>Phone Number: {contactDetails.phone_number}</p>
      <Link href="/contacts">
        <a>Back to Contacts</a>
      </Link>
    </div>
  );
};

ContactView.propTypes = {
  contactId: PropTypes.string.isRequired, // Adjust the type accordingly
};

export default ContactView;
