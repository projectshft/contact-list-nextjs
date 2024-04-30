import Link from 'next/link';
import Image from 'next/image';
import { useContacts, Contact } from '../contexts/ContactsContext';

interface ContactRowProps {
  contact: Contact;
}

export function ContactRow({ contact }: ContactRowProps) {
  
  const { removeContact } = useContacts();

  const handleRemoveClick = () => {
    removeContact(contact);
  };
  
  return (
    <tr>
      <td>
        <Image
          src={contact.picture ? contact.picture : '/default-profile-picture.jpg'}
          alt={'profile picture'}
          width={30}
          height={30}
        />
      </td>
      <td>
         <Link href={`/contacts/${contact.id}`}>
            {contact.name}
          </Link>
      </td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <Link href={`/contacts/edit/${contact.id}`}>
          <button className='btn btn-secondary btn-sm'>Edit</button>
        </Link>
      </td>
      <td>
          <button onClick={handleRemoveClick} className='btn btn-danger btn-sm'>Remove</button>
      </td>
    </tr>
  );
}