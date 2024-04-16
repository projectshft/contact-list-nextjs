import { ContactRow } from './contactRow';
import { TableHeading } from './tableHeading';

export function ContactsTable({ contacts, matchingContact }) {

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