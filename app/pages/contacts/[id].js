// pages/contacts/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import ContactView from '../../components/ContactView';

const ContactDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return <ContactView contactId={id} />;
};

export default ContactDetails;
