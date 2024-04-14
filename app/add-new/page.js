'use client';
import { ContactsAPI } from "../data/contacts-api";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

/**
 * Utilize useState hook to create setter function for all contact object parameters.
 * Define `handleAddContact` function to handle button click event.
 * @returns contact data pushed to ContactsAPI.
 */
export default function AddContact() {
  const [id, setID] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [imgURL, setImgURL] = useState(null);
  const [phone, setPhone] = useState(null);
  const router = useRouter();
  
  //generate random id to be assigned to each contact.
  const generateId = () => Math.round(Math.random() * 100000000); 

  const handleAddContact = () => {
    ContactsAPI.addContact({
      id,
      name,
      email,
      imgURL,
      phone,
    });
    router.push('../');
    
  };


  return (
    <div className='text-center'>
      
      <form className="addNewContainer">
        
        <label>Name</label>
        <input 
          type="text"
          className="form-control"
          placeholder="Enter name"
          onChange={(e) => {
            setName(e.target.value);
            setID(generateId())
          }}
        />

        <label>email</label>
        <input 
          type="text"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <label>Image URL</label>
        <input 
          type="text"
          className="form-control"
          placeholder="Enter URL for image"
          onChange={(e) =>
            setImgURL(e.target.value)
          }
        />

        <label>Phone</label>
        <input 
          type="text"
          className="form-control"
          placeholder="Enter phone number"
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <button type="button" className="btn btn-primary" onClick={handleAddContact}>Add New Contact</button>
      </form>

      <Link href='../'>All Contacts</Link>
    </div>
  )
}