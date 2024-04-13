import { ContactRow } from './contactRow';

export function ContactsTable({ contacts, matchingContact }) {

  if (matchingContact.length > 0) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr className='table-dark'>
            <th scope='col'>picture</th>
            <th scope='col'>name</th>
            <th scope='col'>email</th>
            <th scope='col'>phone</th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {matchingContact.map((contact) => (<ContactRow key={contact.id} contact={contact}/>))}
        </tbody>
      </table>
    );
  }

  if (contacts.length >= 1) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr className='table-dark'>
            <th scope='col'>picture</th>
            <th scope='col'>name</th>
            <th scope='col'>email</th>
            <th scope='col'>phone</th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (<ContactRow key={contact.id} contact={contact}/>))}
        </tbody>
      </table>
    );
  }

  return (
    <ContactsTableHeading/>
  );

}

// Make a ContactsTableHeading
function ContactsTableHeading () {
  return (
    <table className='table'>
      <thead>
        <tr className='table-dark'>
          <th scope='col'>picture</th>
          <th scope='col'>name</th>
          <th scope='col'>email</th>
          <th scope='col'>phone</th>
          <th scope='col'></th>
          <th scope='col'></th>
        </tr>
      </thead>
    </table>
  );
};