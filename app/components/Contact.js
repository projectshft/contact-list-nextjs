import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Contact = ({ contact }) => {
  return (
    <div>
      <Link href={`/contacts/${contact.id}`}>
          <h2>{contact.name}</h2>
      </Link>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
