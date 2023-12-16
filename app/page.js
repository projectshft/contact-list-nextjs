import Image from 'next/image'
import styles from './page.module.css'
import ContactList from './components/ContactList'

export default function Home() {
  return (
    <main>
      <h1>All Contacts</h1>
      <button className='btn btn-primary add-contact d-block m-2 mw-100'>ADD CONTACT</button>
      <input type='text' placeholder='Search Contacts' className='search w-75 mt-2'></input>
      <ContactList />
    </main>
  )
}
