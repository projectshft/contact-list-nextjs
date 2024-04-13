import Link from 'next/link';
import { useContacts } from '../contexts/ContactsContext';

export function ContactRow({ key, contact }) {
  
  const { removeContact } = useContacts();

  const handleRemoveClick = () => {
    removeContact(contact);
  };
  
  return (
    <tr>
      <td><img src={contact.picture}/></td>
      <td>
         <Link href={`./contacts/${contact.id}`}>
            {contact.name}
          </Link>
      </td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <Link href={`./contacts/edit/${contact.id}`}>
          <button>Edit</button>
        </Link>
      </td>
      <td>
          <button onClick={handleRemoveClick}>Remove</button>
      </td>
    </tr>
  );
}