'use client';
import '../globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { ContactsList } from '../components/ContactList';

export default function Contacts() {

  return (
    <div className="container">
      <main>
        <div className="row">
          <div className='col-md-8 offset-md-2'>
              <div className='page-header text-center'>
                <h1>All Contacts</h1>
              </div>

              <div className='add-contact-btn text-center'>
                <button className='btn btn-primary'><Link className="unstyled-link" href="/contacts/new">Add Contact</Link></button>
              </div>

              <hr />
          </div>
        </div>
        <ContactsList></ContactsList>
      </main>
    </div>
  )
}
