import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ContactPage = () => {
    const router = useRouter();
    const { id } = router.query;
  
    return (
      <div>
        <Link href="/contacts">
          Back to Contacts
        </Link>
        <h1>Contact Details</h1>
        <p>Contact ID: {id}</p>
      </div>
    );
  };

export default ContactPage;