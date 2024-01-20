import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactView = ({ match, contacts }) => {
  const contactId = parseInt(match.params.id, 10);
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
  match: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactView;
