import { ContactRow } from './contactRow';
import { TableHeading } from './tableHeading';
import { Contact } from '../contexts/ContactsContext';

interface ContactsTableProps {
  contacts: Contact[];
  matchingContact: Contact[];
}

export function ContactsTable({ contacts, matchingContact }: ContactsTableProps) {

  // Renders each contact object as a row if a value exists in the matchingContact array, 
  if (matchingContact.length > 0) {
    return (
      <table className='table table-striped'>
        <TableHeading/>
        <tbody>
          {matchingContact.map((contact) => (<ContactRow key={contact.id} contact={contact}/>))}
        </tbody>
      </table>
    );
  }

  if (contacts.length >= 1) {
    return (
      <table className='table table-striped'>
        <TableHeading/>
        <tbody>
          {contacts.map((contact) => (<ContactRow key={contact.id} contact={contact}/>))}
        </tbody>
      </table>
    );
  }

  return (
    <table className='table table-striped'>
      <TableHeading/>
    </table>
  );

}