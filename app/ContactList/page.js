'use client'
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image"
import Link from 'next/link'

export default function ContactList({ prop }) {
  const link = () => {
    alert('Sorry, but this does not function!')
  }

  return (
    <div className='container'>
      <div className='row text-center'>
        <div className="col">
          <div className="border-0 list-group-item"><u>Profile Picture</u></div>
        </div>
        <div className="col">
          <div className="border-0 list-group-item"><u>Name</u></div>
        </div>
        <div className="col">
          <div className="border-0 list-group-item"><u>Email</u></div>
        </div>
        <div className="col">
          <div className="border-0 list-group-item"><u>Phone Number</u></div>
        </div>
        <div className="col">
          <div className="border-0 list-group-item"><u>Actions</u></div>
        </div>
      </div>

      <br />

      {prop.map((c) => (
        <div className="row text-center p-1" key={c.id}>
          <div className="col">
            <div className="border-0 list-group-item">
              <Image width={40} height={40} alt="unc" src={c.image_url} />
            </div>
          </div>
          <div className="col">
            <div className="border-0 list-group-item">
              <Link id={c.id} href={{ pathname: '/contacts/contact', query: { id: c.id } }}>
                {c.name}
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="border-0 list-group-item">{c.email}</div>
          </div>
          <div className="col">
            <div className="border-0 list-group-item">{c.phone_number}</div>
          </div>
          <div className="col">
            <div className="border-0 list-group-item">
              <button onClick={link} className='btn btn-link'>Edit/Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}