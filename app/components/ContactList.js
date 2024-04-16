import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;