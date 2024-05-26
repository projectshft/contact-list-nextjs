'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function Form({ addContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();

    
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !imageURL || !phone) {
      alert('All Fields Must Be Filled Out');
      return;
    }
   
    const randomId = Math.round(Math.random() * 100000000);
    const newContact =  {
                          id: randomId.toString(),
                          name: name,
                          email: email,
                          imageURL: imageURL,
                          phone: phone,                  
    };


    addContact(newContact);
    router.push('/contacts');

  };

    return (
      <>
      
        
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='inputName' className='form-label'>Name</label>
            <input type='text' className='form-control' id='inputName' name='name' onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='inputEmail' className='form-label'>Email</label>
            <input type='email' className='form-control' id='inputEmail' name='email' onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='inputImageURL' className='form-label'>Image URL</label>
            <input type='text' className='form-control' id='inputImageURL' name='imageURL' onChange={(e) => setImageURL(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='inputPhone' className='form-label'>Phone</label>
            <input type='text' className='form-control' id='inputPhone' name='phone' onChange={(e) => setPhone(e.target.value)}></input>
          </div>
      
          <button type="submit" className='btn btn-primary'>Add Contact</button>
        </form>
      </>
    );

}
export default Form