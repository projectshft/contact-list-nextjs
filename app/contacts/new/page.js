"use client"
import 'bootstrap/dist/css/bootstrap.css';
import '../../globals.css'
import Link from 'next/link';
import { ContactAPI } from '@/app/data/contactAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function NewContact() {
    const generateId = () => Math.round(Math.random() * 100000000);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [phone, setPhone] = useState('');

    const router = useRouter();

    const handleClick = () => {
        ContactAPI.addContact({
            name,
            email,
            image,
            phone,
            id: generateId()
        });
        router.push('/contacts');
    };

    return (
        <div className="container">
            <main>
              <div className='col-md-6 offset-md-3'>
                <div className='page-header text-center'>
                    <h1>Add New Contact</h1>
                    <Link href='/contacts'>Back</Link>
                </div>

                <form className='post-form'>
                  <div className='form-group'>
                    <input
                        type='text'
                        id='contact-name'
                        className='form-control'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type='text'
                        id='contact-email'
                        className='form-control'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type='text'
                        id='contact-image'
                        className='form-control'
                        placeholder='Image URL'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />

                    <input
                        type='text'
                        id='contact-phone'
                        className='form-control'
                        placeholder='Phone Number ***-***-****'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                  </div>

                  <button
                    onClick={handleClick}
                    type='button'
                    className='btn btn-primary add-contact form-control'
                    >
                    Submit
                  </button>
                </form>
              </div>
            </main>
        </div>
    )
}
