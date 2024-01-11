// components/Contact.js
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Contact = ({ contact }) => (
  <div>
    {/* Display individual contact details */}
    <Link href={`/contacts/${contact.id}`}>
      <a>View Details</a>
    </Link>
  </div>
);

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
