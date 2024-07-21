'use client'
import 'app/components/contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';
import Link from 'next/link';
import { useState } from 'react'
import { NewContact } from './components/newContact';
import { contactData } from './data/contactData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  const contacts = contactData.all()

  const [search, setSearch] = useState('');

  return (
    <main className={styles.main}>
      <div className='text-center'>
        <h1>Contacts</h1>
      </div>
      <div className='text-center'>
      <input className='search'
    placeholder="Search Contacts" onChange={(e) => setSearch(e.target.value)}/>
      </div>
        <div className='text-center'>
          <NewContact/>
        </div>
     <div className='container mt-4'>
      <table className='table'>
          <thead>
            <tr className='text-center'>
              <th>Actions</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Number</th>
              <th>Email</th>
            </tr>
            </thead>
          <tbody>
            {contacts.filter((contact) => {
              return search.toLowerCase() === '' ? contact : contact.name.     toLowerCase().includes(search);
              }).map((contact)=> (
              <tr key={contact.id}>
                      <td className='text-center'>
                        <FontAwesomeIcon className='icon' icon={faPen} style={{color: "#000000",}} />
                        <FontAwesomeIcon className='icon' icon={faTrash} style={{color: "#000000",}} />
                      </td>
                      <td className='text-center'>
                         <img className='small-image' src={contact.photo}   alt='contact photo'/>
                       </td>
                       <td className='text-center'> <Link href={`/contactinfo/${contact.id}`}>{contact.name}</Link></td>
                       <td className='text-center'>{contact.number}</td>
                       <td className='text-center'>{contact.email}</td>
                   </tr>
                  ))}
            </tbody>
        </table> 
      </div>
    </main>
  )
}