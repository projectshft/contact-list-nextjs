'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ContactListAPI } from '../data/ContactListAPI';

function Contact({ contact }) {

const router = useRouter();

const handleClick = () => {
    router.push(`/contacts/${contact.id}`)
};


    return (
      <>
        <tr key={contact.id} onClick={handleClick} >
          <td>
            <img  src={contact.imageURL}
              alt='Profile Pic'
              height={50}
              width={50} />
          </td>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      </>

    );

}
export default Contact