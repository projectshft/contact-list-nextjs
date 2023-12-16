import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <h1>All Contacts</h1>
      <button className='btn btn-primary add-contact'>ADD CONTACT</button>
      <input type='text' placeholder='Search Contacts'></input>
    </main>
  )
}
