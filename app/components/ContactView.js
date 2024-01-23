// ContactView.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactView = ({ contacts }) => {
  const { id } = useParams();
  const contactId = parseInt(id, 10);
  const contact = contacts.find((c) => c.id === contactId);

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone_number}</p>
      <Link to="/contacts">Back to Contacts</Link>
    </div>
  );
};

ContactView.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactView;
